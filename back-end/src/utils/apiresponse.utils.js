class successApiResponse {
  constructor(message, data) {
    this.status = 'success';
    this.message = message;
    this.data = data;
  }
}

class errorApiResponse {
  constructor(message, data) {
    this.status = 'error';
    this.message = message;
    this.data = data;
  }
}

export { successApiResponse, errorApiResponse };
