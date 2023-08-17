import './style.css';

export default function Page404() {
	return (
		<div className='wrapper'>
			<div className='container'>
				<div className='grid-row'>
					<div className='colmun colmun-left'>
						<img className='certain-img' src='/assets/img/404.png' alt='404' />
						<h1 className='title-404 px-spc-b-20'>
							We can&apos;t find the page you are looking for.
						</h1>
						<span className='px-spc-b-20'>This page has been relocated or removed.</span>

						<button className='go-home'>
							<i className='fa fa-home'></i> <a href='/'>Go Home</a>
						</button>
					</div>
					<div className='colmun colmun-right'>
						<img className='certain-img' src='/assets/img/def.png' alt='right-shape' />
					</div>
				</div>
			</div>
		</div>
	);
}
