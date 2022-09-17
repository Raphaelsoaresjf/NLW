import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react';
import { Input } from './Form/Input';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
	id: string;
	title: string;
}

export function CreateAdModal(){
    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setweekDays] = useState<string[]>([])
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false)

	useEffect(() => {
		axios('http://localhost:3333/games/').then(response => {
			setGames(response.data)
		})
	}, [])

    async function handleCreateAd(e: FormEvent) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData);

        try {
            await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
                name : data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                weekDays: weekDays.map(Number),
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                useVoiceChannel: useVoiceChannel
        })
        alert('Cadastro realizado com sucesso!');
        } catch (error) {
            alert('Erro ao realizar o cadastro!');
            console.log(error);
        }
    }
    
    return(
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed bg-" />
            <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
                <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="game" className="font-semibold">Qual o game?</label>
                        <select 
                            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none" 
                            id="game"
                            name="game"
                            placeholder="Selecione o game que deseja jogar"
                            defaultValue=""
                            required
                        >
                            <option disabled value="">Selecione o game que deseja jogar</option>
                            {games.map(game => {
                                return (
                                    <option key={game.id} value={game.id}>{game.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Seu nome(nickname)</label>
                        <Input id="name" name="name" type="text" placeholder="Como te chamam nos games" required />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                            <Input id="yearsPlaying" name="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual o seu discord?</label>
                            <Input id="discord" name="discord" type="text" placeholder="Usuario#0000" required/>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays">Quando costuma jogar?</label>
                            <ToggleGroup.Root 
                                type="multiple" 
                                className="grid grid-cols-4 gap-2"
                                value={weekDays}
                                onValueChange={setweekDays}
                            >
                                <ToggleGroup.Item 
                                    value="0"
                                    title="Domingo"
                                    className={`w-10 h-10 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        D
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="1"
                                    title="Segunda"
                                    className={`w-10 h-10 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="2"
                                    title="Terça"
                                    className={`w-10 h-10 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        T
                                </ToggleGroup.Item>
                                <ToggleGroup.Item
                                    value="3" 
                                    title="Quarta"
                                    className={`w-10 h-10 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="4"
                                    title="Quinta"
                                    className={`w-10 h-10 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        Q
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="5"
                                    title="Sexta"
                                    className={`w-10 h-10 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        S
                                </ToggleGroup.Item>
                                <ToggleGroup.Item 
                                    value="6"
                                    title="Sábado"
                                    className={`w-10 h-10 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                                    >
                                        S
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <Input id="hourStart" name="hourStart" type="time" placeholder="De" required/>
                                <Input id="hourEnd" name="hourEnd" type="time" placeholder="Até" required/>
                            </div>
                        </div>
                    </div>

                    <label className="mt-2 flex gap-2 text-sm items-center">
                        <Checkbox.Root 
                            required
                            checked = {useVoiceChannel}
                            className="w-6 h-6 p-1 rounded bg-zinc-900" 
                            onCheckedChange={(checked) => {
                                if (checked === true) {
                                    setUseVoiceChannel(true)
                                }else {
                                    setUseVoiceChannel(false)
                                }
                            }}
                        >
                            <Checkbox.Indicator>
                                <Check className="w-4 h-4 text-emerald-400" />
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>

                    <footer className=" mt-4 flex justify-end gap-4">
                        <Dialog.Close 
                            type="button"
                            className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar
                        </Dialog.Close>
                        <button 
                            type="submit"
                            className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                        >
                            <GameController size={24} />
                            Encontrar duo
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )

}