export type ConsultationSource = "popup" | "footer";

export type ConsultationPayload = {
  fullName: string;
  phone: string;
  age?: string;
  source: ConsultationSource;
};

export type ConsultationEmailData = ConsultationPayload & {
  id: number;
};
