import type { SacramentMeeting } from '@/lib/types';
import PrintButton from "@/components/PrintButton";

interface MeetingDetailProps {
    meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
    const formattedDate = new Date(
        `${meeting.date}T00:00:00`
    ).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md print:shadow-none">
            <div className="text-center border-b pb-6">
                <h2 className="text-3xl font-bold text-blue-900">
                    Sacrament Meeting
                </h2>

                <p className="mt-2 text-lg">{formattedDate}</p>

                <p className="mt-1 capitalize text-gray-600">
                    {meeting.meetingType} Meeting
                </p>
            </div>

            <section className="mt-6 space-y-2">
                <p><strong>Presiding:</strong> {meeting.presiding}</p>
                <p><strong>Conducting:</strong> {meeting.conducting}</p>
            </section>

            <section className="mt-6">
                <h3 className="text-xl font-semibold text-blue-900">
                    Announcements
                </h3>

                {meeting.announcements?.length ? (
                    <ul className="mt-2 list-disc pl-6">
                        {meeting.announcements.map((announcement, index) => (
                            <li key={index}>{announcement}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-2 text-gray-500">No announcements.</p>
                )}
            </section>

            <section className="mt-6 space-y-4">
                <div>
                    <h3 className="font-semibold text-blue-900">Opening Hymn</h3>
                    <p>
                        {meeting.openingHymn.number} - {meeting.openingHymn.title}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-blue-900">Opening Prayer</h3>
                    <p>{meeting.openingPrayer}</p>
                </div>

                <div>
                    <h3 className="font-semibold text-blue-900">Ward Business</h3>

                    {meeting.wardBusiness.length > 0 ? (
                        <ul className="list-disc pl-6">
                            {meeting.wardBusiness.map((item, index) => (
                                <li key={index}>{item.description}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No ward business.</p>
                    )}
                </div>

                <div>
                    <h3 className="font-semibold text-blue-900">Stake Business</h3>
                    <p>{meeting.stakeBusiness ? 'Yes' : 'No'}</p>
                </div>

                <div>
                    <h3 className="font-semibold text-blue-900">Sacrament Hymn</h3>
                    <p>
                        {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
                    </p>
                </div>
            </section>

            <section className="mt-6">
                <h3 className="text-xl font-semibold text-blue-900">
                    Speakers and Musical Numbers
                </h3>

                {meeting.speakers.length > 0 ? (
                    <ul className="mt-2 space-y-3">
                        {meeting.speakers.map((item, index) => (
                            <li key={index}>
                                <p className="font-medium">
                                    {item.name}
                                    {' — '}
                                    {item.type === 'speaker' ? 'Speaker' : 'Musical Number'}
                                </p>

                                {item.topic && <p className="text-gray-600">{item.topic}</p>}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-2 text-gray-500">
                        No speakers or musical numbers listed.
                    </p>
                )}
            </section>

            <section className="mt-6 space-y-4">
                <div>
                    <h3 className="font-semibold text-blue-900">Closing Hymn</h3>
                    <p>
                        {meeting.closingHymn.number} - {meeting.closingHymn.title}
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-blue-900">Closing Prayer</h3>
                    <p>{meeting.closingPrayer}</p>
                </div>
            </section>

            <div className="mt-8 border-t pt-6 print:hidden">
                <PrintButton />
            </div>
        </article>
    );
}