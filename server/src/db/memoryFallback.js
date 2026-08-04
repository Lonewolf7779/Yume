/**
 * In-memory PostgreSQL Pool Fallback
 * Used when running locally without a live PostgreSQL daemon so the owner can preview and test the web app immediately.
 */
export class MemoryPgPool {
  constructor() {
    this.users = [];
    this.generations = [];
    this.uploads = [];
    this.auditLogs = [];
    this.nextUserId = 1;
    this.nextGenId = 1;
    this.nextUploadId = 1;
    this.nextAuditId = 1;
  }

  async query(text, params = []) {
    const sql = text.trim();

    // SELECT 1 (health check)
    if (sql.includes('SELECT 1')) {
      return { rows: [{ '?column?': 1 }], rowCount: 1 };
    }

    // CREATE TABLE / INDEX
    if (sql.startsWith('CREATE TABLE') || sql.startsWith('CREATE INDEX') || sql.startsWith('ALTER TABLE') || sql.startsWith('--')) {
      return { rows: [], rowCount: 0 };
    }

    // USER REGISTRATION: INSERT INTO users
    if (sql.includes('INSERT INTO users')) {
      const username = params[0];
      const email = params[1];
      const password_hash = params[2];
      const role = params[3] || 'user';
      const user = { id: this.nextUserId++, username, email, password_hash, role, created_at: new Date() };
      this.users.push(user);
      return { rows: [user], rowCount: 1 };
    }

    // USER FIND BY EMAIL OR ID
    if (sql.includes('FROM users') && sql.includes('WHERE email =')) {
      const email = params[0]?.toLowerCase();
      const user = this.users.find((u) => u.email.toLowerCase() === email);
      return { rows: user ? [user] : [], rowCount: user ? 1 : 0 };
    }

    if (sql.includes('FROM users') && sql.includes('WHERE id =')) {
      const user = this.users.find((u) => u.id === params[0]);
      return { rows: user ? [user] : [], rowCount: user ? 1 : 0 };
    }

    // USER COUNT CHECK
    if (sql.includes('COUNT(*)') && sql.includes('FROM users')) {
      return { rows: [{ count: this.users.length }], rowCount: 1 };
    }

    // LIST USERS (ADMIN)
    if (sql.includes('FROM users') && (sql.includes('ORDER BY') || sql.includes('users u'))) {
      const rows = this.users.map((u) => ({
        ...u,
        createdAt: u.created_at,
        generatedCount: this.generations.filter((g) => g.user_id === u.id).length
      }));
      return { rows, rowCount: rows.length };
    }

    // INSERT UPLOADS
    if (sql.includes('INSERT INTO user_uploads')) {
      const upload = {
        id: this.nextUploadId++,
        user_id: params[0],
        original_filename: params[1],
        storage_key: params[2],
        storage_provider: params[3],
        mime_type: params[4],
        file_size_bytes: params[5],
        width: params[6],
        height: params[7],
        is_private: true,
        consent_given: true,
        consent_at: new Date(),
        consent_version: 'v1.0',
        created_at: new Date()
      };
      this.uploads.push(upload);
      return { rows: [upload], rowCount: 1 };
    }

    // SELECT UPLOADS FOR USER
    if (sql.includes('FROM user_uploads') && sql.includes('WHERE user_id =')) {
      const list = this.uploads.filter((u) => u.user_id === params[0]).sort((a, b) => b.created_at - a.created_at);
      return { rows: list, rowCount: list.length };
    }

    // SELECT SINGLE UPLOAD BY ID
    if (sql.includes('FROM user_uploads') && sql.includes('WHERE id =')) {
      const item = this.uploads.find((u) => u.id === Number(params[0]));
      return { rows: item ? [item] : [], rowCount: item ? 1 : 0 };
    }

    // DELETE UPLOAD
    if (sql.includes('DELETE FROM user_uploads')) {
      const idx = this.uploads.findIndex((u) => u.id === Number(params[0]));
      if (idx !== -1) this.uploads.splice(idx, 1);
      return { rows: [], rowCount: 1 };
    }

    // INSERT GENERATION
    if (sql.includes('INSERT INTO generations')) {
      const gen = {
        id: this.nextGenId++,
        user_id: params[0],
        prompt: params[1],
        image_size: params[2],
        seed: params[3],
        model: params[4],
        status: 'queued',
        source_upload_id: params[5] || null,
        images: [],
        error_message: null,
        created_at: new Date(),
        updated_at: new Date()
      };
      this.generations.push(gen);
      return { rows: [gen], rowCount: 1 };
    }

    // LIST GENERATIONS
    if (sql.includes('FROM generations') && sql.includes('WHERE user_id =')) {
      const list = this.generations.filter((g) => g.user_id === params[0]).sort((a, b) => b.created_at - a.created_at);
      return { rows: list, rowCount: list.length };
    }

    // GET GENERATION BY ID
    if (sql.includes('FROM generations') && sql.includes('WHERE id =')) {
      const gen = this.generations.find((g) => g.id === Number(params[0]));
      return { rows: gen ? [gen] : [], rowCount: gen ? 1 : 0 };
    }

    // UPDATE GENERATION
    if (sql.includes('UPDATE generations')) {
      const genId = params[params.length - 1];
      const gen = this.generations.find((g) => g.id === Number(genId));
      if (gen) {
        gen.status = params[0] || gen.status;
        gen.updated_at = new Date();
      }
      return { rows: gen ? [gen] : [], rowCount: gen ? 1 : 0 };
    }

    // DELETE GENERATION
    if (sql.includes('DELETE FROM generations')) {
      const idx = this.generations.findIndex((g) => g.id === Number(params[0]));
      if (idx !== -1) this.generations.splice(idx, 1);
      return { rows: [], rowCount: 1 };
    }

    // ADMIN AUDIT LOGS
    if (sql.includes('INSERT INTO admin_audit_logs')) {
      const log = { id: this.nextAuditId++, created_at: new Date() };
      this.auditLogs.push(log);
      return { rows: [log], rowCount: 1 };
    }

    return { rows: [], rowCount: 0 };
  }

  async end() {
    return Promise.resolve();
  }
}
