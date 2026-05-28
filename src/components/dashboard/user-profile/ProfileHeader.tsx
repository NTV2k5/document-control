import { Mail, Phone, MapPin, Building, Camera } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { profileInfoMock } from '@/utils/mockData';

export function ProfileHeader() {
  return (
    <Card className="rounded-3xl border-none shadow-sm ring-1 ring-slate-100/50">
      <CardContent className="p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="relative shrink-0">
            {/* Glow effect behind avatar */}
            <div className="absolute inset-0 rounded-3xl bg-blue-400 opacity-20 blur-2xl dark:opacity-40"></div>

            <div className="relative h-28 w-28 overflow-hidden rounded-[2rem] shadow-xl ring-4 shadow-slate-200/50 ring-white">
              <Image
                src={profileInfoMock.avatar}
                alt={profileInfoMock.name}
                width={112}
                height={112}
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <button className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-sm hover:bg-blue-700">
              <Camera className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{profileInfoMock.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">{profileInfoMock.role}</p>
              </div>
              <Badge
                variant="outline"
                className="rounded-full border-green-200 bg-green-50 px-3 py-1 text-[10px] font-bold tracking-wider text-green-600 uppercase shadow-sm hover:bg-green-100"
              >
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>{' '}
                {profileInfoMock.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">{profileInfoMock.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                  <Building className="h-4 w-4" />
                </div>
                <span className="font-medium">{profileInfoMock.department}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">{profileInfoMock.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-medium">{profileInfoMock.location}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
