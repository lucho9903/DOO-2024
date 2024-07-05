package co.edu.uco.deviucopay.business.facade.impl.carnet;

import java.util.List;


import co.edu.uco.deviucopay.business.assembler.dto.impl.CarnetAssemblerDTO;
import co.edu.uco.deviucopay.business.facade.FacadeWithReturn;
import co.edu.uco.deviucopay.business.usecase.impl.carnet.ConsultarCarnets;
import co.edu.uco.deviucopay.crosscutting.exceptions.DeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.MessageCatalogStrategy;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.data.CodigoMensaje;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;
import co.edu.uco.deviucopay.dto.CarnetDTO;


public class ConsultarCarnetFacade implements FacadeWithReturn<CarnetDTO, List<CarnetDTO>> {
	private DAOFactory daoFactory;

	public ConsultarCarnetFacade() {
		daoFactory = DAOFactory.getFactory();
	}

	@Override
	public List<CarnetDTO> execute(final CarnetDTO dto) {

		try {
			var usecase = new ConsultarCarnets(daoFactory);
			var carnetDomain = CarnetAssemblerDTO.getInstance().toDomain(dto);
			var resultadosDomain = usecase.execute(carnetDomain);
			return CarnetAssemblerDTO.getInstance().toDTOCollection(resultadosDomain);

		} catch (final DeviUcopayException exception) {
			throw exception;
		} catch (final Exception exception) {

			var mensajeUsuario = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00023);
			var mensajeTecnico = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00024);
			
			throw new BusinessDeviUcopayException(mensajeTecnico, mensajeUsuario, exception);

		} finally {
			daoFactory.cerrarConexion();
		}
	}


}
