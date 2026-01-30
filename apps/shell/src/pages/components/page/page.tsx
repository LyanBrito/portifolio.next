import dynamic from 'next/dynamic';

const RemoteButton = dynamic(
    () => import('next2/test'),
    { ssr: false }
);

export default function Page() {
    return <RemoteButton />;
}