<?php if (!defined('VB_ENTRY')) die('Access denied.');

require_once DIR . '/vb/search/searchcontroller.php' ;

class vBCms_Search_SearchController_NewStaticPage extends vBCms_Search_SearchController_NewContentNode
{

	/** standard constructor **/
	public function __construct()
	{
		$self->contenttypeid = vB_Types::instance()->getContentTypeID('vBCms_StaticPage');
	}

}
/*======================================================================*\
|| ####################################################################
|| # Downloaded: 14:49, Thu Oct 8th 2009
|| # SVN: $Revision: 37602 $
|| ####################################################################
\*======================================================================*/