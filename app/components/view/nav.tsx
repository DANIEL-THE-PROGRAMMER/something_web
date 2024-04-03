
import { MenuBtn, BookBtn } from "@/app/styles";
import { Logo } from "@/app/icon";

export const Nav = () => {
    return (
      <>
        <div className="menuflex">
          <MenuBtn>Menu</MenuBtn>
        </div>
        <Logo />
        <div className="menuflex2">
          <BookBtn>
            <div>Make a booking</div>
          </BookBtn>
        </div>
      </>
    );
}