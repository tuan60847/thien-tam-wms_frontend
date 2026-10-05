"use client";
import { useCallback, useEffect, useState } from "react";
import { HangHoa } from "@/models/hang-hoa.model";
import { hangHoaService } from "@/services/hang-hoa.service";

export function useHangHoaViewModel() {
  const [items, setItems] = useState<HangHoa[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setItems(await hangHoaService.getAll());
      setError(null);
    } catch {
      setError("Không tải được danh sách hàng hóa");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const remove = async (id: number) => {
    await hangHoaService.remove(id);
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  const filtered = items.filter((x) =>
    x.tenSP.toLowerCase().includes(keyword.toLowerCase())
  );

  return { items: filtered, loading, error, keyword, setKeyword, reload: load, remove };
}