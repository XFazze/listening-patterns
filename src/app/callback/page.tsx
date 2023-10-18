import { redirect } from 'next/navigation';

type Props = { params: {}; searchParams: { [key: string]: string | string[] | undefined } };
export default function Callback(props: Props) {
  const searchParams = props.searchParams;
  console.log(searchParams);
  redirect('/');
}
