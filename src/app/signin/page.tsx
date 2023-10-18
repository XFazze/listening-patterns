import { randomBytes } from 'crypto';
import { redirect } from 'next/navigation';

export default function Signin() {
  var state = randomBytes(16).toString('hex');
  var scope = 'user-read-private user-read-email';

  let queryParams = {
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID!,
    scope: scope,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URL!,
    state: state,
  };
  console.log(queryParams);
  redirect('https://accounts.spotify.com/authorize?' + new URLSearchParams(queryParams).toString());
}
