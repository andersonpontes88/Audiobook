// cSpell:disable
function ContainerProgresso({
	tempoTotalFaixa,
	tempoAtualFaixa,
	referencia,
	avancarPara,
}) {
	const formatarTempo = (tempoEmSegundos) => {
		const tempo = new Date(null);
		tempo.setSeconds(tempoEmSegundos);
		return tempo.toISOString().slice(11, 19);
	};

	return (
		<section className='container-progresso'>
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className='progresso-total'
				ref={referencia}
				onClick={avancarPara}
			></div>
			<div
				className='progresso-atual'
				style={{
					width: `${(tempoAtualFaixa * 100) / tempoTotalFaixa}%`,
				}}
			>
				{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
				<div className='marcador-posicao'></div>
			</div>
			<div className='metricas-tempo'>
				<p>{formatarTempo(tempoAtualFaixa)}</p>
				<p>{formatarTempo(tempoTotalFaixa)}</p>
			</div>
		</section>
	);
}

export default ContainerProgresso;
