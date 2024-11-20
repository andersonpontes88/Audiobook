// cSpell:disable
import './styles.css';

function Capa({ imgCapa, textoAlternativo }) {
	return (
		<div className='box-img'>
			<img className='histEcleImg' src={imgCapa} alt={textoAlternativo} />
		</div>
	);
}

export default Capa;
