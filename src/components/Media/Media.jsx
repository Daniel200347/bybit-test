import React from "react";
import classnames from "classnames";

import classes from "./Media.module.css";

function getMobile(
  desktopContent,
  tabletContent,
  mobileContent,
  preMobileContent
) {
  if (mobileContent !== undefined) return mobileContent;
  if (preMobileContent !== undefined) return preMobileContent;
  if (tabletContent !== undefined) return tabletContent;

  return desktopContent;
}

function getTablet(desktopContent, tabletContent) {
  if (tabletContent !== undefined) return tabletContent;
  return desktopContent;
}

function getPreMobileContent(desktopContent, tabletContent, preMobileContent) {
  if (preMobileContent !== undefined) return preMobileContent;
  if (tabletContent !== undefined) return tabletContent;
  return desktopContent;
}

function Media({
  desktopContent,
  tabletContent,
  mobileContent,
  preMobileContent,
}) {
  return (
    <div>
      <div className={classnames(classes.block, classes.showMobile)}>
        {getMobile(desktopContent, tabletContent, mobileContent)}
      </div>
      <div className={classnames(classes.block, classes.showPreMobile)}>
        {getPreMobileContent(desktopContent, tabletContent, preMobileContent)}
      </div>
      <div className={classnames(classes.block, classes.showTablet)}>
        {getTablet(desktopContent, tabletContent)}
      </div>
      <div className={classnames(classes.block, classes.showDesktop)}>
        {desktopContent}
      </div>
    </div>
  );
}

export default Media;
