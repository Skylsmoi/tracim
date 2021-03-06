"""
General hookspec for Tracim Backend app
=======================================

"""

from pyramid.config import Configurator

from tracim_backend.config import CFG
from tracim_backend.lib.core.plugins import hookspec


@hookspec
def web_include(configurator: Configurator, app_config: CFG) -> None:
    """
    Allow to including custom web code in plugin if ´web_include´ method is provided
    at module root, example using a Controller class like in Tracim source code

    >>> class MyController(Controller):
    ...     pass
    ... # doctest: +SKIP
    >>> @hookimpl
    ... def web_include(configurator: Configurator, app_config: CFG) -> None:
    ...     my_controller = MyController()
    ...     configurator.include(mycontroller.bind, route_prefix=BASE_API_V2)
    ... # doctest: +SKIP

    :param configurator: Tracim pyramid configurator
    :param app_config: current tracim config
    :return: nothing
    """
    pass
