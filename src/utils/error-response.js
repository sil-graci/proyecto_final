export class BadRequest extends Error { constructor(m){super(m); this.status = 400;} }
export class NotFound extends Error { constructor(m){super(m); this.status = 404;} }
