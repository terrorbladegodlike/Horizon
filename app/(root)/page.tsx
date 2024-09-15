// Import Components
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
   const loggedIn = {
      firstName: 'Mihail',
      lastName: 'Ternovetchii',
      email: 'ternovetchii.2002@gmail.com',
   }

   return (
      <section className='home'>
         <div className='home-content'>
            <header className='home-header'>
               <HeaderBox
                  type='greeting'
                  title='Welcome'
                  user={loggedIn?.firstName || 'Guest'}
                  subtext='Access and manage your account and transactions efficiently.'
               />

               <TotalBalanceBox
                  accounts={[]}
                  totalBanks={1}
                  totalCurrentBalance={1250.58}
               />
            </header>
            RECENT TRANSACTIONS
         </div>

         <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 126.25 }, { currentBalance: 123.87 }]}
         />
      </section>
   )
}

export default Home
