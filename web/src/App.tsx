import './styles/main.css';
import logo from './assets/Logo.svg';

function App() {
	return (
		<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
			<img src={logo} alt=""/>
			<h1 className="text-6xl text-white font-black mt-20">
				Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui!
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				<a href="" className="relative">
					<img src="/game-1.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient">
						<strong className="font-bold"></strong>
						<span className=""> 4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative">
					<img src="/game-2.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient">
						<strong className="font-bold"></strong>
						<span className=""> 4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative">
					<img src="/game-3.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient">
						<strong className="font-bold"></strong>
						<span className=""> 4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative">
					<img src="/game-4.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient">
						<strong className="font-bold"></strong>
						<span className=""> 4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative">
					<img src="/game-5.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient">
						<strong className="font-bold"></strong>
						<span className=""> 4 anúncios</span>
					</div>
				</a>
				<a href="" className="relative">
					<img src="/game-6.png" alt="" />
					<div className="w-full pt-16 pb-4 px-4 bg-game-gradient">
						<strong className="font-bold"></strong>
						<span className=""> 4 anúncios</span>
					</div>
				</a>
			</div>
		</div>
	)
}

export default App
