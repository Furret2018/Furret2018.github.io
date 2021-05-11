Day 1
Part 1
# Avaya Company Introduction
	Avaya History
	Avaya Locations

Dalian BBE
	Avaya Products & Solutions

# UC
协议
H323 SIP

服务器
CM
AAMS / Gateway G450 G650
SM
SMGR

# CC
AES Application Enablement Service
VP / AAEP 
POM
CMS call management service
ACR / WFO


Solutions
CM - AAMS/GW - Phone


================================================
IP / FQDN
Host <- Platform/ Physcial <- OS <- (SW Server )
RHEL (RedHat Enterprise Linux)

================================================

Communication Manager

R5 R5.2.4 没有虚拟化技术
R6 VM
Major.Minor version

Release Note
Overview        https://downloads.avaya.com/css/P8/documents/100089460
AAMS/ GW DSP资源， 没有DSP资源，话机会注册失败
G450 多用于Branch site
G650 多用于Main site  TDM Device
PN port network 5个G650堆叠

S8300C / S8300D -> G450  LSP CM
S8400 -> 650
单独Server
S8510
S8730
S8800

PLDS   product license Delivery Service





# Installation

Avaya System Platform       ASP  R6.3.4
Common Server (CSR1) 通用服务器
Dell R610 Server
HP DL360 G7 Server 

两大部分：
CDom (Console Domain)   IP 
Dom0 (System Domain)  IP

在Dom0的hosts文件中 cdom.vsp指向cdom的IP
在CDom的hosts文件中 dom0.vsp指向dom0的IP

https://downloads.avaya.com/css/P8/documents/100089133    


SSH IP
admin  既可以登录CLI, 又可以登录Web
root 只能登录CLI

Web Access : Https://CDom-IP

WebLM : Web License Manager

===============================

CM Duplex     2 HA
CM Simplex 

======================


SAL Secure access link

Maintenance

EOS




	Avaya Customers (Business Partner/Direct Customer)
	Avaya Advantages (Call Center, Patents…)






Avaya Tools/Websites Introduction
	Avaya Support Website (SSO, Create SR, Manage SR, MEA, Download documents and installation files…)

https://furret2018.github.io/avayalinks.html

SR : Service Request
Case / Ticket



	GSS OPS Report Suite (Open Dashboard, Hours Booked Report, Siebel SR Details…)

CSM : Client Service Manager 客户经理




	Siebel (SR Details, Activities, ADM, Attachments…)
	MPA/One Source (Confirm Contracts)
	SAP I2P (Contract Confirmation, PCN Order…)
	EASG Web Mobile (One Time Password)
	ShareFile (Request/Share Files)
	Avaya Knowledge Base (Administration, FAQ, PSN, Solutions…)
	ITSS (Request Accounts, Password Change…)
	PLDS (License, installation file download…)















# Common Server     
Common Server (CSR1) 通用服务器     
- Dell R610 Server    
- HP DL360 G7 Server     

Common Server (CSR2) 通用服务器    
- R620 
- HP DL360p G8

Common Server (CSR3) 通用服务器   
- R630 
- HP DL360p G9

Common Server (CSR4) 通用服务器    
- R640   ASP ACP 110 120 130 
