import * as React from 'react';
import Footer from "../components/Footer/Footer.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

const MyFooter = ({classes}) => {

return (
    <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.facebook.com/smartcitypw"
                    target="_blank"
                    className={classes.block}
                  >
                    MKNSC
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.facebook.com/wilpw"
                    target="_blank"
                    className={classes.block}
                  >
                    WIL
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="https://www.facebook.com/politechnika.warszawska" className={classes.block}>
                    PW
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} by{" "}
              <a
                href="https://www.facebook.com/smartcitypw"
                target="_blank"
              >
                MKN Smart City PW
              </a>
            </div>
          </div>
        }
      />
)};

export default MyFooter;