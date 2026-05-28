import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { profileInfoMock } from '@/utils/mockData';

export function PersonalInfo() {
  return (
    <Card className="rounded-3xl border-none shadow-sm ring-1 ring-slate-100/50">
      <CardContent className="p-8">
        <div className="mb-8 flex">
          <div className="border-b-2 border-blue-600 pb-3">
            <h4 className="text-sm font-bold text-blue-600">Personal Information</h4>
          </div>
          <div className="flex-1 border-b-2 border-slate-100/50"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              First Name
            </label>
            <Input
              defaultValue="Sarah"
              className="h-12 rounded-xl border-none bg-slate-50 px-4 font-medium text-slate-800"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Last Name
            </label>
            <Input
              defaultValue="Jenkins"
              className="h-12 rounded-xl border-none bg-slate-50 px-4 font-medium text-slate-800"
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Employee ID
            </label>
            <Input
              defaultValue="EMP-2025-0982"
              className="h-12 rounded-xl border-none bg-slate-50 px-4 font-medium text-slate-400"
              readOnly
            />
          </div>
          <div className="space-y-3">
            <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Department
            </label>
            <select className="flex h-12 w-full rounded-xl border-none bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 focus-visible:outline-none">
              <option>Information Management</option>
            </select>
          </div>
          <div className="space-y-3 md:col-span-2">
            <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Professional Bio
            </label>
            <textarea
              defaultValue={profileInfoMock.bio}
              className="flex min-h-[100px] w-full rounded-xl border-none bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-800 focus-visible:outline-none"
            ></textarea>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
