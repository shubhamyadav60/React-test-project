import { config } from "@core/config/config";

export class ApiEndpoint {
  static get epbaseUrl() {
    return `${config.API_BASE_URL}/api`;
  }

  static get Login() {
    return `${this.epbaseUrl}/login`;
  }
}
