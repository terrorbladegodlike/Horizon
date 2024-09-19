// Import Components
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'

const Home = async () => {
   const loggedIn = await getLoggedInUser()

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
            banks={{ currentBalance: 123.52, currentBalance: 485.24 }}
         />
      </section>
   )
}

export default Home
