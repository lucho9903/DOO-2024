package co.edu.uco.deviucopay.business.assembler.dto.impl;

import static co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper.getObjectHelper;

import java.util.List;
import java.util.ArrayList;
import co.edu.uco.deviucopay.business.assembler.dto.AssemblerDTO;
import co.edu.uco.deviucopay.business.domain.AfiliadoDomain;
import co.edu.uco.deviucopay.business.domain.InstitucionDomain;
import co.edu.uco.deviucopay.business.domain.TipoIdentificacionDomain;
import co.edu.uco.deviucopay.dto.AfiliadoDTO;
import co.edu.uco.deviucopay.dto.InstitucionDTO;
import co.edu.uco.deviucopay.dto.TipoIdentificacionDTO;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;

public final class AfiliadoAssemblerDTO implements AssemblerDTO<AfiliadoDomain, AfiliadoDTO> {
	
	private static final AssemblerDTO<AfiliadoDomain, AfiliadoDTO>  instance = new AfiliadoAssemblerDTO();
	private static final AssemblerDTO<InstitucionDomain, InstitucionDTO> institucionAssembler = InstitucionAssemblerDTO.getInstance();
	private static final AssemblerDTO<TipoIdentificacionDomain, TipoIdentificacionDTO> tipoIdentificacionAssembler = TipoIdentificacionAssemblerDTO.getInstance();
	
	private AfiliadoAssemblerDTO() {
		super();
	}
	
	public static final AssemblerDTO<AfiliadoDomain, AfiliadoDTO> getInstance(){
		return instance;
	}

	@Override
	public AfiliadoDomain toDomain(final AfiliadoDTO data) {
		var afiliadoDtoTmp = ObjectHelper.getObjectHelper().getDefaultValue(data, AfiliadoDTO.build());
		var institucionDomain = institucionAssembler.toDomain(afiliadoDtoTmp.getInstitucion());
		var tipoIdentificacionDomain = tipoIdentificacionAssembler.toDomain(afiliadoDtoTmp.getTipoIdentificacion());
		return AfiliadoDomain.build(afiliadoDtoTmp.getId(), afiliadoDtoTmp.getNumeroIdAfiliado(),
				afiliadoDtoTmp.getNombre(), afiliadoDtoTmp.getCorreo(),afiliadoDtoTmp.getTelefono(), tipoIdentificacionDomain, institucionDomain);
	}

	@Override
	public AfiliadoDTO toDTO(AfiliadoDomain domain) {
		var afiliadoDomainTmp = ObjectHelper.getObjectHelper().getDefaultValue(domain, AfiliadoDomain.build());
		var institucionDto = institucionAssembler.toDTO(afiliadoDomainTmp.getInstitucion());
		var tipoIdentificacionDto = tipoIdentificacionAssembler.toDTO(afiliadoDomainTmp.getTipoIdentificacion());
		return AfiliadoDTO.build().setId(afiliadoDomainTmp.getId()).setNombre(afiliadoDomainTmp.getNumeroIdAfiliado())
				.setNombre(afiliadoDomainTmp.getNombre()).setCorreo(afiliadoDomainTmp.getCorreo()).setTelefono(afiliadoDomainTmp.getTelefono())
				.setTipoIdentificacion(tipoIdentificacionDto).setInstitucion(institucionDto);
				
	}

	@Override
	public List<AfiliadoDomain> toDomainCollection(List<AfiliadoDTO> dtoCollection) {
		var dtoCollectionTmp = ObjectHelper.getObjectHelper().getDefaultValue(dtoCollection,
				new ArrayList<AfiliadoDTO>());
		return dtoCollectionTmp.stream().map(this::toDomain).toList();
	}

	@Override
	public final List<AfiliadoDTO> toDTOCollection(final List<AfiliadoDomain> domainCollection) {
		var domainCollectionTmp = ObjectHelper.getObjectHelper()
				.getDefaultValue(domainCollection, new ArrayList<AfiliadoDomain>());
		return domainCollectionTmp.stream().map(this::toDTO).toList();
	}
	
}