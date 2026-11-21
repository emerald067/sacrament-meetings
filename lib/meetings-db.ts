import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-11-15',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: ['Ward temple night: November 22'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [
      { description: 'Sustaining of new Primary president' },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: 'As Now We Take the Sacrament',
    },
    speakers: [
      {
        name: 'Sister Brown',
        topic: 'Faith in Jesus Christ',
        type: 'speaker',
      },
      {
        name: 'Youth Choir',
        topic: 'Musical Number',
        type: 'musical-number',
      },
      {
        name: 'Brother Davis',
        topic: 'Following the Savior',
        type: 'speaker',
      },
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
  },
  {
    id: 2,
    date: '2026-11-08',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Adams',
    announcements: ['Youth activity: November 14'],
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Sister Johnson',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 172,
      title: 'In Humility, Our Savior',
    },
    speakers: [],
    closingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    closingPrayer: 'Sister Brown',
  },
  {
    id: 3,
    date: '2026-11-01',
    meetingType: 'regular',
    presiding: 'President Clark',
    conducting: 'Brother James',
    announcements: ['Stake conference preparation'],
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    openingPrayer: 'Brother Wilson',
    wardBusiness: [
      { description: 'Ward council update' },
    ],
    stakeBusiness: true,
    sacramentHymn: {
      number: 174,
      title: 'While of These Emblems We Partake',
    },
    speakers: [
      {
        name: 'Sister Green',
        topic: 'The Power of Prayer',
        type: 'speaker',
      },
      {
        name: 'Primary Children',
        topic: 'Children’s Musical Number',
        type: 'musical-number',
      },
    ],
    closingHymn: { number: 30, title: 'Come, Come, Ye Saints' },
    closingPrayer: 'Brother Thomas',
  },
  {
    id: 4,
    date: '2026-10-25',
    meetingType: 'stake',
    presiding: 'President Clark',
    conducting: 'Brother Adams',
    announcements: ['Stake leadership meeting'],
    openingHymn: { number: 4, title: 'Truth Eternal' },
    openingPrayer: 'Sister White',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 169,
      title: 'As Now We Take the Sacrament',
    },
    speakers: [
      {
        name: 'President Clark',
        topic: 'Serving in the Stake',
        type: 'speaker',
      },
    ],
    closingHymn: { number: 27, title: 'Praise to the Man' },
    closingPrayer: 'Brother James',
  },
  {
    id: 5,
    date: '2026-10-18',
    meetingType: 'general',
    presiding: 'President Clark',
    conducting: 'Brother Jones',
    announcements: ['General meeting announcements'],
    openingHymn: { number: 5, title: 'High on the Mountain Top' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 170,
      title: 'God, Our Father, Hear Us Pray',
    },
    speakers: [
      {
        name: 'President Smith',
        topic: 'Building Faith',
        type: 'speaker',
      },
    ],
    closingHymn: { number: 26, title: 'Joseph Smith’s First Prayer' },
    closingPrayer: 'Brother Wilson',
  },
];


export function getMeetings(
  date?: string | null,
): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(
  id: number,
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}