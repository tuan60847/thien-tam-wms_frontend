export interface HangHoa {
  id: number;
  tenSP: string;
  quyCach?: string;
  giaNhap: number;
  giaHienThi: number;
  giaToiThieu: number;
  soDangKi?: string;
  loaiKiemSoat?: string;
  isKeDon: boolean;
  isCanGiuLanh: boolean;
  ghiChu?: string;
  loaiHangId: number;
}
export type HangHoaForm = Omit<HangHoa, "id">;