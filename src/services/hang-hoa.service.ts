import { http } from "./http";
import { HangHoa, HangHoaForm } from "@/models/hang-hoa.model";

export const hangHoaService = {
  getAll: async () => (await http.get<HangHoa[]>("/hang-hoa")).data,
  create: async (d: HangHoaForm) => (await http.post<HangHoa>("/hang-hoa", d)).data,
  update: async (id: number, d: Partial<HangHoaForm>) =>
    (await http.patch<HangHoa>(`/hang-hoa/${id}`, d)).data,
  remove: async (id: number) => http.delete(`/hang-hoa/${id}`),
};