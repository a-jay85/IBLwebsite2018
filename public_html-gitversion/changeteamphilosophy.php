<?php  $username = "iblhoops_chibul"; $password = "oliver23"; $database = "iblhoops_iblleague";  mysql_connect(localhost,$username,$password); @mysql_select_db($database) or die( "Unable to select database");  $SlideUp = $_POST['SlideUp']; $Team = $_POST['team'];  $query="UPDATE `nuke_ibl_team_info` SET SlideUp = '$SlideUp' WHERE team_name = '$team' LIMIT 1"; $result=mysql_query($query);  echo "<HTML><HEAD><TITLE>Team Philosophy Change</TITLE><meta http-equiv=\"refresh\" content=\"0;url=http://www.iblhoops.net/modules.php?name=Free_Agency\"></HEAD><BODY> Changing your team philosophy and returning you to the Free Agency page... hang tight! </BODY></HTML>";