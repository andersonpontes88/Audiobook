function SeletorCap({ capituloAtual }) {
	return (
		<div className='box-cap'>
			<div className='box-select'>
				<button type='button' className='btn-cap'>
					{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
					<i className='bi bi-list-ol'></i>
					<p>{`Capítulo ${capituloAtual}`}</p>
				</button>
			</div>
		</div>
	);
}

export default SeletorCap;
