import React from 'react';
import { formatDate } from '../utils/insight.utils';

interface InsightMetaProps {
    publishedAt: string;
    readingTime?: number;
    author?: string;
    location?: string;
    eventDate?: string;
}

export const InsightMeta: React.FC<InsightMetaProps> = ({
    publishedAt,
    readingTime,
    author,
    location,
    eventDate,
}) => {
    return (
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
            <span>{formatDate(publishedAt)}</span>
            {readingTime && (
                <>
                    <span>•</span>
                    <span>{readingTime} MIN READ</span>
                </>
            )}
            {author && (
                <>
                    <span>•</span>
                    <span>{author}</span>
                </>
            )}
            {location && (
                <>
                    <span>•</span>
                    <span>{location}</span>
                </>
            )}
            {eventDate && (
                <>
                    <span>•</span>
                    <span>EVENT: {formatDate(eventDate)}</span>
                </>
            )}
        </div>
    );
};

export default InsightMeta;
