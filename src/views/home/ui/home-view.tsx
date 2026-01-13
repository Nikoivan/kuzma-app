'use server';

import { FC, PropsWithChildren } from 'react';
import { Menu, Mountain } from 'lucide-react';
import Image from 'next/image';

import { Logo } from '@/shared/ui/logo';
import bgSrc from '@/shared/assets/images/home-header-bg.jpg';
import mountainSrc from '@/shared/assets/images/montain-home.jpg';
import firstRiderSrc from '@/shared/assets/images/first-rider.jpg';
import secondRiderSrc from '@/shared/assets/images/second-rider.jpg';
import mergeSrc from '@/shared/assets/images/merge.jpg';
import formBgSrc from '@/shared/assets/images/form-bg.jpg';

const Button: FC<
  PropsWithChildren<{ variant: string; className?: string }>
> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 uppercase tracking-wide';

  const variants = {
    primary:
      'bg-[#8da332] text-white hover:bg-[#7a8f2b] shadow-md font-bold text-lg py-6 rounded-full w-full md:w-auto',
    glass:
      'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 font-bold text-lg py-6 rounded-full w-full md:w-auto',
    outline:
      'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`flex h-12 w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8da332] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export const HomeView: FC = async () => (
  <div className='min-h-screen bg-white font-sans text-slate-900 selection:bg-[#8da332] selection:text-white'>
    <header className='relative w-full h-screen min-h-[600px] flex flex-col'>
      <Image
        className={'absolute h-screen w-full z-1 object-cover object-bottom'}
        src={bgSrc}
        width={1000}
        height={1000}
        alt='Spitsa Bike Camp'
      />
      <nav className='relative z-10 flex justify-between items-center p-6 container mx-auto'>
        <Logo />
        <button
          // onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-white'
        >
          <Menu size={32} />
        </button>
      </nav>
      <div className='relative z-10 flex-grow flex flex-col justify-center px-6 container mx-auto'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] mb-8 drop-shadow-lg'>
          Spitsa <br /> Bike Camp
        </h1>

        <div className='flex flex-col md:flex-row gap-4 max-w-md md:max-w-xl mt-auto mb-12 md:mb-24'>
          <Button variant='glass'>Календарь</Button>
          <Button variant='primary'>Забронировать</Button>
        </div>
      </div>
    </header>

    {/* 2. CAMPS 2026 SECTION */}
    <section className='py-16 md:py-24 relative overflow-hidden'>
      {/* Decorative Background Element */}
      <div className='absolute top-0 left-0 w-[500px] h-[500px] border-[1px] border-gray-200 rounded-full -translate-x-1/2 -translate-y-1/4 opacity-50 pointer-events-none'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <h2 className='text-4xl md:text-5xl font-black text-center uppercase mb-4'>
          Кэмпы 2026
        </h2>
        <p className='text-center text-gray-500 max-w-lg mx-auto mb-12 text-sm md:text-base'>
          Придумать текст по типу: прокачай свою выносливость, повысь навыки в
          горах Крыма и т.п.
        </p>

        <div className='flex flex-col gap-10 max-w-2xl mx-auto mb-16'>
          {/* Date Item 1 */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 pb-6'>
            <div className='flex items-center gap-4'>
              <span className='text-xs text-gray-400 uppercase w-16'>
                Ближайшие
                <br />
                кэмпы
              </span>
              <span className='text-5xl font-black tracking-tighter'>
                10.07
              </span>
            </div>
            <div className='mt-2 sm:mt-0 flex-1 sm:px-8'>
              <div className='text-gray-500 text-sm'>Алушта</div>
              <div className='flex items-center gap-2 text-sm font-bold mt-1'>
                Сложность:
                <div className='flex gap-1'>
                  <span className='w-3 h-3 rounded-full bg-green-500'></span>
                  <span className='w-3 h-3 rounded-full bg-yellow-400'></span>
                  <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                  <span className='w-3 h-3 rounded-full bg-gray-300'></span>
                </div>
              </div>
            </div>
            <button className='text-[#8da332] font-bold text-sm uppercase mt-4 sm:mt-0 hover:underline'>
              Подробнее
            </button>
          </div>

          {/* Date Item 2 */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 pb-6'>
            <div className='flex items-baseline gap-4'>
              <span className='w-16'></span>
              <span className='text-5xl font-black tracking-tighter'>
                22.07
              </span>
            </div>
            <div className='mt-2 sm:mt-0 flex-1 sm:px-8'>
              <div className='text-gray-500 text-sm'>Алушта</div>
              <div className='text-sm font-bold mt-1'>
                Уровень сложности:
                <br />
                продвинутый
              </div>
            </div>
            <button className='text-[#8da332] font-bold text-sm uppercase mt-4 sm:mt-0 hover:underline'>
              Подробнее
            </button>
          </div>

          {/* Date Item 3 */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6'>
            <div className='flex items-baseline gap-4'>
              <span className='w-16'></span>
              <span className='text-5xl font-black tracking-tighter'>
                03.08
              </span>
            </div>
            <div className='mt-2 sm:mt-0 flex-1 sm:px-8'>
              <div className='text-gray-500 text-sm'>Алушта</div>
              <div className='text-sm font-bold mt-1'>
                Уровень сложности:
                <br />
                продвинутый
              </div>
            </div>
            <button className='text-[#8da332] font-bold text-sm uppercase mt-4 sm:mt-0 hover:underline'>
              Подробнее
            </button>
          </div>
        </div>
        <Image
          className='w-full'
          src={mountainSrc}
          alt='Spitsa Bike Camp'
          width={1000}
          height={1000}
        />
      </div>
    </section>

    {/* 3. INSTRUCTORS SECTION */}
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-black text-center uppercase mb-16 leading-tight'>
          Наши <br className='md:hidden' /> Инструкторы
        </h2>

        <div className='flex flex-col gap-16 max-w-4xl mx-auto'>
          {/* Instructor 1 */}
          <div className='flex flex-col md:flex-row gap-6 items-center'>
            <div className='relative w-full md:w-1/2 aspect-square md:aspect-[4/3]'>
              <span className='absolute top-0 left-0 text-6xl font-black text-white drop-shadow-md z-10 p-2'>
                01
              </span>
              <Image
                src={secondRiderSrc}
                width={1000}
                height={1000}
                alt='Instructor 1'
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
              />
            </div>
            <div className='w-full md:w-1/2 text-center md:text-right'>
              <h3 className='text-3xl font-black uppercase mb-2'>
                Александр
                <br />
                Кузьменко
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Профессиональный райдер.
                <br />
                Многократный чемпион и т.п.
              </p>
            </div>
          </div>

          {/* Instructor 2 (Reversed on Desktop) */}
          <div className='flex flex-col md:flex-row-reverse gap-6 items-center'>
            <div className='relative w-full md:w-1/2 aspect-square md:aspect-[4/3]'>
              <span className='absolute top-0 right-0 text-6xl font-black text-white drop-shadow-md z-10 p-2'>
                02
              </span>
              <Image
                src={firstRiderSrc}
                width={1000}
                height={1000}
                alt='Instructor 1'
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
              />
            </div>
            <div className='w-full md:w-1/2 text-center md:text-left'>
              <h3 className='text-3xl font-black uppercase mb-2'>
                Николаенко
                <br />
                Иван
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Профессиональный райдер.
                <br />
                Многократный чемпион и т.п.
              </p>
            </div>
          </div>

          {/* Instructor 3 */}
          <div className='flex flex-col md:flex-row gap-6 items-center'>
            <div className='relative w-full md:w-1/2 aspect-square md:aspect-[4/3]'>
              <span className='absolute top-0 left-0 text-6xl font-black text-white drop-shadow-md z-10 p-2'>
                03
              </span>
              <Image
                src={secondRiderSrc}
                width={1000}
                height={1000}
                alt='Instructor 1'
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500'
              />
            </div>
            <div className='w-full md:w-1/2 text-center md:text-right'>
              <h3 className='text-3xl font-black uppercase mb-2'>
                Александр
                <br />
                Кузьменко
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Профессиональный райдер.
                <br />
                Многократный чемпион и т.п.
              </p>
            </div>
          </div>

          <div className='mt-8 flex justify-center'>
            <Button variant='primary' className='md:w-full max-w-md'>
              Забронировать
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* 4. MERCH SECTION */}
    <section className='py-16'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-black uppercase mb-4'>Магазин Мерча</h2>
        <p className='text-gray-500 text-sm max-w-md mx-auto mb-8'>
          Мы создали коллекцию одежды, которая откликается в сердцах поклонников
        </p>

        <div className='relative max-w-md mx-auto aspect-[4/5] overflow-hidden rounded-lg group cursor-pointer'>
          <Image
            src={mergeSrc}
            width={1000}
            height={1000}
            alt='Мерч'
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          />
          <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-8'>
            <div className='border border-white/50 bg-black/30 backdrop-blur-sm text-white px-8 py-3 rounded-full uppercase font-bold tracking-wide hover:bg-white hover:text-black transition-colors'>
              Выбрать мерч
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 5. FORM SECTION */}
    <section className='py-16 pb-24 relative'>
      <h2 className='text-4xl font-black text-center uppercase mb-8 text-slate-900'>
        Оставить заявку
      </h2>

      <div className='container mx-auto px-4'>
        <div className='relative rounded-2xl overflow-hidden max-w-lg mx-auto shadow-2xl'>
          {/* Background for form */}
          <div className='absolute inset-0'>
            <Image
              src={formBgSrc}
              width={1000}
              height={1000}
              alt='Форма заявки'
              className='w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-black/40 backdrop-blur-sm'></div>
          </div>

          {/* Form Content */}
          <div className='relative p-8 z-10 flex flex-col gap-4'>
            <div className='flex justify-between items-start mb-4 opacity-50'>
              <h3 className='text-3xl font-black text-black uppercase leading-none tracking-tighter'>
                Spitsa Bike
                <br />
                Camp
              </h3>
              <Mountain className='text-black w-10 h-10' />
            </div>

            <form className='flex flex-col gap-4'>
              <Input type='text' placeholder='Фамилия Имя' />
              <Input type='text' placeholder='Возраст' />
              <Input type='tel' placeholder='Телефон' />
              <Input type='text' placeholder='Город' />
              <Input type='text' placeholder='Уровень катания и ОФП' />

              <Button variant='primary' className='mt-4'>
                Забронировать
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Simple */}
    <footer className='bg-slate-900 text-white py-8 text-center text-xs uppercase tracking-widest opacity-80'>
      © 2026 Spitsa Bike Camp. All rights reserved.
    </footer>
  </div>
);
