import React,{ useContext } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './menubar.css';
import { Context } from '../context/Context';


const NavMenu = () => {
  const { user, dispatch } = useContext(Context);
  const PublicFlo = "https://your-projects-com.vercel.app/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='logo'><img src="./images/logo.png" alt="" />
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Menu <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="70" height="70" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0">
                      <defs>
                        <clipPath id="034abc160a">
                          <path d="M 75.769531 71.109375 L 238.519531 71.109375 L 238.519531 215.109375 L 75.769531 215.109375 Z M 75.769531 71.109375 " clip-rule="nonzero"/>
                        </clipPath>
                        <clipPath id="c810848968">
                          <path d="M 178.289062 127 L 299.039062 127 L 299.039062 303.976562 L 178.289062 303.976562 Z M 178.289062 127 " clip-rule="nonzero"/>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#034abc160a)">
                        <path fill="#ffffff" d="M 159.144531 114.035156 L 133.714844 71.128906 L 75.769531 71.128906 L 130.128906 162.273438 L 130.128906 215.09375 L 184.238281 215.09375 L 184.238281 162.855469 L 238.519531 71.128906 L 184.65625 71.128906 Z M 159.144531 114.035156 " fill-opacity="1" fill-rule="nonzero"/>
                      </g>
                      <g clipPath="url(#c810848968)">
                        <path fill="#ffffff" d="M 268.589844 173.003906 L 270.816406 172.65625 L 270.816406 218.917969 L 268.589844 218.871094 Z M 265.492188 225.445312 C 265.519531 225.445312 274.007812 225.199219 274.007812 225.199219 C 277.054688 225.105469 277.015625 222.671875 277.015625 222.082031 C 277.015625 221.496094 277.015625 169.097656 277.015625 169.097656 C 277.015625 169.097656 277.21875 166.425781 274.535156 165.984375 L 266.105469 164.269531 C 265.199219 164.09375 264.25 164.320312 263.527344 164.910156 C 262.808594 165.5 262.390625 166.382812 262.390625 167.3125 L 262.390625 222.339844 C 262.390625 223.179688 262.714844 223.996094 263.328125 224.570312 C 263.730469 224.949219 264.9375 225.445312 265.492188 225.445312 Z M 292.855469 242.753906 L 265.046875 246.792969 C 263.519531 247.015625 262.390625 248.324219 262.390625 249.867188 L 262.390625 288.878906 L 239.101562 296.332031 L 239.101562 134.601562 L 292.855469 151.796875 Z M 232.902344 296.296875 L 184.488281 280.421875 L 184.488281 150.503906 L 232.902344 134.628906 Z M 296.898438 146.566406 L 236.945312 127.386719 C 236.664062 127.300781 235.933594 127.125 235.035156 127.394531 L 180.425781 145.300781 C 179.148438 145.71875 178.289062 146.910156 178.289062 148.253906 L 178.289062 282.671875 C 178.289062 284.015625 179.148438 285.207031 180.425781 285.625 L 235.035156 303.535156 C 236.066406 303.855469 236.636719 303.640625 236.945312 303.542969 L 266.433594 294.105469 C 267.714844 293.695312 268.589844 292.5 268.589844 291.148438 L 268.589844 252.554688 L 296.394531 248.515625 C 297.921875 248.292969 299.050781 246.984375 299.050781 245.441406 L 299.050781 149.527344 C 299.050781 148.175781 298.179688 146.976562 296.898438 146.566406 " fill-opacity="1" fill-rule="nonzero"/>
                      </g>
                    </svg>
                    <div className="CalloutHeading">YourProjects.com</div>
                    <p className="CalloutText">A platform for creators to share their Projects</p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="/" title="Home">
                Homepage of the website
              </ListItem>
              <ListItem href="/write" title="Write">
                Upload your projects based on your selected categories as much as you want
              </ListItem>
              <ListItem href="/postshow" title="Posts">
                Projects by other creators from various categories
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            {user ?(
              user.username
            ):(<>Account</>)}<CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">{
              user ? (
                <>
              <ListItem title='Account Settings' href='/setting'>
              <img className="topImg" src={PublicFlo + user.profilePic} alt="" />
              <br/>Edit your account info here
              </ListItem>
              <ListItem title='My Posts' href='/single'>
              <br />  All your posts made in YourProjects.com
              </ListItem>
              <ListItem title='Log Out' onClick={handleLogout}>
              <br /> Log out from YourProjects.com
              </ListItem>
              </>
              ):(
                <>
              <ListItem title="Login" href="/login">
                Log In to your YP account
              </ListItem>
              <ListItem title="Register" href="/register">
                Dont have an account? Register Now
              </ListItem>
              <ListItem title="Help" onClick={handleLogout}>
                Have an issue? Report now
              </ListItem>
              </>
              )}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/karth1kkk/YourProjects.com">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
    </div>
  );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default NavMenu;
