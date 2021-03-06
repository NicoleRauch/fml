import React from 'react';

import Link from 'next/link';

import defaultPage from '../../layouts/defaultPage';

const LogIn = () => (
	<div>
		<p>
			Needs <s><Link href='https://github.com/zeit/next.js/issues/25'>#25</Link></s>, <Link href='https://github.com/zeit/next.js/issues/291'>#291</Link> to be fixed/implemented.
			Otherwise Next.js will not be able to work with, e.g. <Link href='https://portier.github.io/'>portier</Link>.
			<br />
			According to <Link href='https://github.com/zeit/next.js/issues/226#issuecomment-261390403'>this comment</Link>, shouldn't be to long from now.
		</p>
	</div>
)

export default defaultPage(LogIn);

