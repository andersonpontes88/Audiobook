function GerenciadorFaixa({
	faixa,
	referencia,
	setTempoTotalFaixa,
	setTempoAtualFaixa,
}) {
	return (
		// biome-ignore lint/a11y/useMediaCaption: <explanation>
		<audio
			src={faixa}
			ref={referencia}
			onLoadedMetadata={() => setTempoTotalFaixa(referencia.current.duration)}
			onTimeUpdate={() => setTempoAtualFaixa(referencia.current.currentTime)}
		/>
	);
}

export default GerenciadorFaixa;
