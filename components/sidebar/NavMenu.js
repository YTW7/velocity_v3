import { ClockIcon, CurrencyDollarIcon, UserCircleIcon, Cog6ToothIcon, HomeIcon,PhotoIcon, ClipboardDocumentCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { classNames } from '../../utils/classNames'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { truncate } from '../../utils/string'
import {useRouter} from 'next/router';
require('@solana/wallet-adapter-react-ui/styles.css')


const NavMenu = ({ connected, publicKey }) => {
    const router = useRouter()
    const menus = [
        {
            icon: HomeIcon,
            item: 'Home',
            current: true,
            action:"/",
        },
        {
            icon: UserGroupIcon,
            item: 'Velocity Social',
            current: true,
            action:"/velocitysocial",
        },
        {
            icon: ClipboardDocumentCheckIcon,
            item: 'Manage Tasks',
            current: false,
            action:"/todo",
        },
        {
            icon: PhotoIcon,
            item: 'Mint NFTs',
            current: false,
            action:"/todo",
        },
        {
            icon: CurrencyDollarIcon,
            item: 'Mint Tokens',
            current: false,
            action:"/todo",
        },
    ]
    const NavMenuItem = ({ Icon, item, current, action }) => {
        return (
            <li onClick={()=> router.push(action)} className={classNames('flex cursor-pointer space-x-3 transition-all hover:text-gray-100', current ? 'text-white' : 'text-[#ffffff]', 'font-semibold')}>
                <Icon className="h-6 w-6 " />
                <span>{item}</span>
            </li>
        )
    }
    
    return (
        <nav className=" flex flex-1 items-center justify-center">
            <ul className="flex flex-col space-y-8">
                {menus.map(({ icon, item, current, action }, i) => (
                    <NavMenuItem key={i} Icon={icon} item={item} current={current} action={action} />
                ))}
                 {/* <li onClick={()=> router.push("/todo")} className={classNames('flex cursor-pointer space-x-3 transition-all hover:text-gray-100', false ? 'text-white' : 'text-[#ffffff]', 'font-semibold')}>
            <CurrencyDollarIcon className="h-6 w-6 " />
            <span>Mint Tokens</span>
        </li> */}
                <li>
                    {/* <button className="flex space-x-3">
                        <UserCircleIcon style={{ height: 24, width: 24, color: '#15ec3c' }} />
                        <span className="text-sm font-semibold text-[#15ec3c]">{connected ? truncate(publicKey.toString()) : 'Connect Wallet'}</span>
                    </button> */}
                    <WalletMultiButton className='phantom-button' startIcon={<UserCircleIcon style={{height:24, width:24, color:'white'}}/>}>
                        <span className='text-sm font-semibold text-white'>{connected ? truncate(publicKey.toString()) :"Connect Wallet"}</span>
                        </WalletMultiButton>
                </li>
            </ul>
        </nav >
    )
}



export default NavMenu
