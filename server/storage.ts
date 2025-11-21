import { type ConsultationRequest, type InsertConsultationRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequest(id: string): Promise<ConsultationRequest | undefined>;
  getAllConsultationRequests(): Promise<ConsultationRequest[]>;
}

export class MemStorage implements IStorage {
  private consultationRequests: Map<string, ConsultationRequest>;

  constructor() {
    this.consultationRequests = new Map();
  }

  async createConsultationRequest(
    insertRequest: InsertConsultationRequest
  ): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async getConsultationRequest(id: string): Promise<ConsultationRequest | undefined> {
    return this.consultationRequests.get(id);
  }

  async getAllConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values());
  }
}

export const storage = new MemStorage();
