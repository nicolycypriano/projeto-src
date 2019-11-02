// import React, { useState, useMemo, useEffect } from 'react';
// import {
//   format,
//   subDays,
//   addDays,
//   setHours,
//   setMinutes,
//   setSeconds,
//   isBefore,
//   isEqual,
//   parseISO,
// } from 'date-fns';
// import { utcToZonedTime } from 'date-fns-tz';
// import pt from 'date-fns/locale/pt';
// import api from '../../services/api';

// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// import { Container, Time } from './styles';

// const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// export default function Dashboard() {
//   const [schedule, setSchedule] = useState([]);
//   const [date, setDate] = useState(new Date());

//   const dateFormatted = useMemo(
//     () => format(date, "d 'de' MMMM", { locale: pt }),
//     [date]
//   );

//   useEffect(() => {
//     async function loadSchedule() {
//       const response = await api.get('schedule', {
//         params: { date },
//       });

//       const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//       const data = range.map(hour => {
//         const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);

//         const compareDate = utcToZonedTime(checkDate, timezone);

//         return {
//           time: `${hour}:00h`,
//           past: isBefore(compareDate, new Date()),
//           appointment: response.data.find(a =>
//             isEqual(parseISO(a.date), compareDate)
//           ),
//         };
//       });

//       setSchedule(data);
//     }

//     loadSchedule();
//   }, [date]);

//   function handlePrevDay() {
//     setDate(subDays(date, 1));
//   }

//   function handleNextDay() {
//     setDate(addDays(date, 1));
//   }

//   return (
//     <Container>
//       <header>
//         <button type="button" onClick={handlePrevDay}>
//           <MdChevronLeft size={36} color="#fff" />
//         </button>
//         <strong>{dateFormatted}</strong>
//         <button type="button" onClick={handleNextDay}>
//           <MdChevronRight size={36} color="#fff" />
//         </button>
//       </header>

//       <ul>
//         {schedule.map(time => (
//           <Time key={time.time} past={time.past} available={!time.appointment}>
//             <strong>{time.time}</strong>
//             <span>
//               {time.appointment ? time.appointment.user.name : 'Em aberto'}
//             </span>
//           </Time>
//         ))}
//       </ul>
//     </Container>
//   );
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//importando imagens
import Perfil from '../../assets/userPerfil.svg';
import Imoveis from '../../assets/userImoveis.svg';
import Alarme from '../../assets/userAlarme.svg';
import Contato from '../../assets/userContato.svg';

//importando componentes
import LogoIni from '../../components/Logo';
import Icon from '../../components/Icon';
import {
  TitleH1Styled,
  TitleH2Styled,
  ConstainerIconsStyled,
  IconStyled,
} from '../UserHome/styles';

class UserHome extends Component {
  render() {
    return (
      <>
        <TitleH1Styled>Sistema de Controle Residencial</TitleH1Styled>
        <TitleH2Styled>Olá, usuário!</TitleH2Styled>
        <ConstainerIconsStyled>
          <Link to="/usuario/imoveis">
            <IconStyled src={Imoveis} />
          </Link>
          <Link to="/usuario/alarme">
            <IconStyled src={Alarme} />
          </Link>
          <Link to="/usuario/contato">
            <IconStyled src={Contato} />
          </Link>
        </ConstainerIconsStyled>
      </>
    );
  }
}

export default UserHome;
