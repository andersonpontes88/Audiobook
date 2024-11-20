// cSpell:disable
function BotoesControle({
	taTocando,
	tocarOuPausarFaixa,
	avancarFaixa,
	voltarFaixa,
	avancar15s,
	voltar15s,
}) {
	return (
		<div className='box-controles'>
			<div className='box-hover'>
				<button type='button' className='btn-skip' onClick={voltarFaixa}>
					{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
					<i className='bi bi-skip-start-circle'></i>
				</button>
				<button type='button' className='btn-second' onClick={voltar15s}>
					<i className='bi bi-arrow-counterclockwise' />
				</button>
				<button
					type='button'
					className='btn-play-pause'
					onClick={tocarOuPausarFaixa}
				>
					<i className={`bi bi-${taTocando ? 'pause' : 'play'}-circle-fill`} />
				</button>
				<button type='button' className='btn-second' onClick={avancar15s}>
					<i className='bi bi-arrow-clockwise' />
				</button>
				<button type='button' className='btn-skip' onClick={avancarFaixa}>
					<i className='bi bi-skip-end-circle' />
				</button>
			</div>
		</div>
	);
}

export default BotoesControle;
