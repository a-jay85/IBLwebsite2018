<?php
/*======================================================================*\
|| #################################################################### ||
|| # vBulletin Blog 4.1.3 - Licence Number VBSWUQO7JP
|| # ---------------------------------------------------------------- # ||
|| # Copyright �2000-2011 vBulletin Solutions Inc. All Rights Reserved. ||
|| # This file may not be redistributed in whole or significant part. # ||
|| # ---------------- VBULLETIN IS NOT FREE SOFTWARE ---------------- # ||
|| # http://www.vbulletin.com | http://www.vbulletin.com/license.html # ||
|| #################################################################### ||
\*======================================================================*/
if (!VB_API) die;

class vB_APIMethod extends vBI_APIMethod
{
	public function output()
	{
		global $vbulletin;

		return $vbulletin->session->vars['dbsessionhash'];
	}
}

/*======================================================================*\
|| ####################################################################
|| # Downloaded: 14:49, Thu Oct 8th 2009
|| # CVS: $RCSfile$ - $Revision: 26995 $
|| ####################################################################
\*======================================================================*/