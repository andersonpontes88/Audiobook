// cSpell:disable
import Capa from './components/Capa';
import histoEcleImg from './images/historia-eclesiatica-eusebio.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useRef, useState } from 'react';
import livro from './audio/HistoEclesia/livro';
import BotoesControle from './components/BotoesControle';
import ContainerProgresso from './components/ContainerProgre';
import GerenciadorFaixa from './components/GerenciadorFaixa';
import SeletorCap from './components/SeletorCap';

function App() {
	const [taTocando, setTaTocando] = useState(false);
	const [faixaAtual, setFaixaAtual] = useState(0);
	const [tempoTotalFaixa, setTempoTotalFaixa] = useState(0);
	const [tempoAtualFaixa, setTempoAtualFaixa] = useState(0);
	const refTagAudio = useRef(null);
	const barraProgresso = useRef(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (taTocando) {
			tocarFaixa();
		}
	}, [faixaAtual]);

	const infoBooks = {
		nome: 'História Eclesiástica ',
		autor: 'Eusébio de Cesareia',
		capitulos: 2,
		faixas: livro,
		capa: histoEcleImg,
		textoAlternativo: 'Capa do livro História Eclesiástica',
	};

	const tocarFaixa = () => {
		refTagAudio.current.play();
		setTaTocando(true);
	};

	const pausarFaixa = () => {
		refTagAudio.current.pause();
		setTaTocando(false);
	};

	const tocarOuPausarFaixa = () => {
		if (taTocando) {
			pausarFaixa();
		} else {
			tocarFaixa();
		}
	};

	const avancarFaixa = () => {
		if (infoBooks.capitulos === faixaAtual + 1) {
			setFaixaAtual(0);
		} else {
			setFaixaAtual(faixaAtual + 1);
		}
	};

	const voltarFaixa = () => {
		if (faixaAtual === 0) {
			setFaixaAtual(infoBooks.capitulos - 1);
		} else {
			setFaixaAtual(faixaAtual - 1);
		}
	};

	const avancar15s = () => {
		refTagAudio.current.currentTime += 15;
	};
	const voltar15s = () => {
		refTagAudio.current.currentTime -= 15;
	};

	const avancarPara = (event) => {
		const largura = barraProgresso.current.clientWidth;
		const novoTempo = (event.nativeEvent.offsetX / largura) * tempoTotalFaixa;
		refTagAudio.current.currentTime = novoTempo;
	};

	return (
		<div className='background'>
			<div className='container-main'>
				<Capa
					imgCapa={infoBooks.capa}
					textoAlternativo={infoBooks.textoAlternativo}
				/>
				<SeletorCap capituloAtual={faixaAtual + 1} />
				<GerenciadorFaixa
					faixa={infoBooks.faixas[faixaAtual]}
					referencia={refTagAudio}
					setTempoTotalFaixa={setTempoTotalFaixa}
					setTempoAtualFaixa={setTempoAtualFaixa}
				/>
				<ContainerProgresso
					tempoTotalFaixa={tempoTotalFaixa}
					tempoAtualFaixa={tempoAtualFaixa}
					referencia={barraProgresso}
					avancarPara={avancarPara}
				/>
				<BotoesControle
					taTocando={taTocando}
					tocarOuPausarFaixa={tocarOuPausarFaixa}
					avancarFaixa={avancarFaixa}
					voltarFaixa={voltarFaixa}
					avancar15s={avancar15s}
					voltar15s={voltar15s}
				/>
			</div>
		</div>
	);
}

export default App;
