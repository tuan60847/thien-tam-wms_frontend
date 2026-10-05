"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useLoginViewModel } from "@/viewmodels/useLoginViewModel";

export default function LoginView() {
  const vm = useLoginViewModel();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm space-y-4 rounded-xl bg-white p-8 shadow">
        <h1 className="text-center text-2xl font-bold text-primary">Thiên Tâm WMS</h1>
        <Input label="Tên đăng nhập" value={vm.username} onChange={(e) => vm.setUsername(e.target.value)} />
        <Input label="Mật khẩu" type="password" value={vm.password}
          onChange={(e) => vm.setPassword(e.target.value)} error={vm.error ?? undefined} />
        <Button className="w-full" loading={vm.loading} onClick={vm.submit}>Đăng nhập</Button>
      </div>
    </div>
  );
}