import Link from 'next/link';

import { List, TwoColumnContainer } from '@components';
import { getCodelogs } from 'app/lib/getContent';

export default async function CodeLogs() {
  const codelogs = await getCodelogs();

  const codelogLinks = codelogs.map((cl) => (
    <List.Item key={cl.sys.id}>
      <Link href={`/codelogs/${cl.fields.title}`}>{cl.fields.title}</Link>
    </List.Item>
  ));

  return (
    <TwoColumnContainer className="w-full max-w-5xl flex-1" right={<List>{codelogLinks}</List>} title="Code logs" />
  );
}
