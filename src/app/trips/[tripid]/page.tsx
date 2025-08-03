import React from 'react'
import { prisma } from '@/lib/prisma';
import TripDetailClient from '@/components/trip-detail';

export default async function TripDetail({params}: {params: Promise<{ tripid: string }>}) {
    const {tripid} = await params;

    const trip = await prisma.trip.findFirst({
        where: {
            id: tripid
        },
    })
if (!trip) {
  return<div>
    Trip not Found
  </div>
}

  return (
    <TripDetailClient trip = {trip}/>
  )
}
