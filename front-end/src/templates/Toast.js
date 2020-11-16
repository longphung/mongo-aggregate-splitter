export default class Toast {
  constructor(
    header = 'Sample Header',
    body = 'Sample Body',
    time = 'sample time',
    type = 'primary',
  ) {
    this.header = header;
    this.body = body;
    this.time = time || '';
    this.type = type;
  }
}
