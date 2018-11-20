# coding=utf-8
# Runner for daemon
import os
from pyramid.paster import get_appsettings
from pyramid.paster import setup_logging
from tracim_backend import CFG
from tracim_backend.lib.mail_fetcher.daemon import MailFetcherDaemon

config_uri = os.environ['TRACIM_CONF_PATH']

setup_logging(config_uri)
settings = get_appsettings(config_uri)
settings.update(settings.global_conf)
app_config = CFG(settings)
app_config.configure_filedepot()

daemon = MailFetcherDaemon(app_config, burst=False)
daemon.run()