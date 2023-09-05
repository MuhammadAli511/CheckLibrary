import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid';
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
const timeline = [
    {
        id: 1,
        content: 'Applied to',
        target: 'Front End Developer',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: 'Advanced to phone screening by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: HandThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function RecentActivities() {
    const themeColors = useContext(ThemeContext);
    return (
        <div className="mt-4">
            <div className="border pt-6 pl-6 pr-6 pb-2 rounded-lg" style={{ color: themeColors.text, backgroundColor: themeColors.background, borderColor: themeColors.cornerRadius }}>
                <div className="flex justify-between items-center mb-6">
                    <span className="font-medium text-xl">Recent Activities</span>
                </div>
                <div className="flow-root">
                    <ul role="list" className="-mb-5">
                        {timeline.map((event, eventIdx) => (
                            <li key={event.id}>
                                <div className="relative pb-8">
                                    {eventIdx !== timeline.length - 1 ? (
                                        <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                    ) : null}
                                    <div className="relative flex space-x-3">
                                        <div>
                                            <span
                                                className={classNames(
                                                    event.iconBackground,
                                                    'h-7 w-7 rounded-full flex items-center justify-center ring-8 ring-white'
                                                )}
                                            >
                                                <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    {event.content}{' '}
                                                    <a href={event.href} className="font-medium text-gray-900">
                                                        {event.target}
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                <time dateTime={event.datetime}>{event.date}</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default RecentActivities;
