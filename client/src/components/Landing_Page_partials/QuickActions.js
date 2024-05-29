import React from 'react';
import Image from 'next/image';
import icon1 from '../../../public/img/Categorys/decore.png';
import icon2 from '../../../public/img/Categorys/catereer-2.png';
import icon3 from '../../../public/img/Categorys/photography.png';
import icon4 from '../../../public/img/Categorys/event-planer.png';
import icon5 from '../../../public/img/Categorys/entertainment.png';
import icon6 from '../../../public/img/Categorys/dj.png';
import icon7 from '../../../public/img/Categorys/entertainment (1).png';
import icon8 from '../../../public/img/Categorys/cake.png';
import icon9 from '../../../public/img/Categorys/makeup.png';
import icon10 from '../../../public/img/Categorys/event-planer (1).png';
import icon11 from '../../../public/img/Categorys/mehndi.png';
import icon12 from '../../../public/img/Categorys/weddingcard.png';

const QuickActions = () => {
  const actions = [
    { id: 'qaSurvey', icon: icon1, name: 'DECORS & FLORISTS' },
    { id: 'qaLoans', icon: icon2, name: 'CATERERS' },
    { id: 'qaInvest', icon: icon3, name: 'PHOTOGRAPHY & VIDEOGRAPHY' },
    { id: 'qaReview', icon: icon4, name: 'KIDS GAMING PLANNER' },
    { id: 'qaDeals', icon: icon5, name: 'LED WALLS & TV' },
    { id: 'qaDeals2', icon: icon6, name: 'DJ' },
    { id: 'qaDeals3', icon: icon7, name: 'ENTERTAINMENT' },
    { id: 'qaDeals4', icon: icon8, name: 'BIRTHDAY PARTY' },
    { id: 'qaDeals5', icon: icon9, name: 'HAIR & BRIDAL MAKEUP' },
    { id: 'qaDeals6', icon: icon10, name: 'WEDDING PLANNER' },
    { id: 'qaDeals7', icon: icon11, name: 'MEHNDI' },
    { id: 'qaDeals8', icon: icon12, name: 'WEDDING CARDS' },
  ];

  return (
    <main className="phone">
      <ul className="quick-actions">
        {actions.map(action => (
          <li key={action.id} id={action.id} className="quick-action">
            <div className={`quick-action__icon ${action.id === 'qaSurvey' || action.id === 'qaLoans' || action.id === 'qaReview' ? 'is-active' : ''}`}>
              <div className="icon-theme">
                <Image src={action.icon} alt={action.name} layout="fixed" width={40} height={40} />
              </div>
            </div>
            <p className="quick-action__name">{action.name}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default QuickActions;
