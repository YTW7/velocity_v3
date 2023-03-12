import { ClockIcon, CurrencyDollarIcon, UserCircleIcon, Cog6ToothIcon, HomeIcon,PhotoIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { classNames } from '../../utils/classNames'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { truncate } from '../../utils/string'
require('@solana/wallet-adapter-react-ui/styles.css')

const NavMenu = ({ connected, publicKey }) => {
    const menus = [
        {
            icon: HomeIcon,
            item: 'Home',
            current: true,
        },
        {
            icon: ClipboardDocumentCheckIcon,
            item: 'Manage Tasks',
            current: false,
        },
        {
            icon: PhotoIcon,
            item: 'Mint NFTs',
            current: false,
        },
        {
            icon: CurrencyDollarIcon,
            item: 'Mint Tokens',
            current: false,
        },
    ]

    return (
        <nav className="flex flex-1 items-center justify-center">
            <ul className="flex flex-col space-y-10">
                {menus.map(({ icon, item, current, action }, i) => (
                    <NavMenuItem key={i} Icon={icon} item={item} current={current} action={action} />
                ))}
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

const NavMenuItem = ({ Icon, item, current, action }) => {
    return (
        <li onClick={action} className={classNames('flex cursor-pointer space-x-3 transition-all hover:text-gray-100', current ? 'text-white' : 'text-[#ffffff]', 'font-semibold')}>
            <Icon className="h-6 w-6 " />
            <span>{item}</span>
        </li>
    )
}

export default NavMenu
