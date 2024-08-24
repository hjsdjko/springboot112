package com.cl.dao;

import com.cl.entity.XueshengchengjiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.XueshengchengjiView;


/**
 * 学生成绩
 * 
 * @author 
 * @email 
 * @date 2024-03-05 21:53:17
 */
public interface XueshengchengjiDao extends BaseMapper<XueshengchengjiEntity> {
	
	List<XueshengchengjiView> selectListView(@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);

	List<XueshengchengjiView> selectListView(Pagination page,@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);
	
	XueshengchengjiView selectView(@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);
	
	List<XueshengchengjiView> selectGroupBy(Pagination page,@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);

    List<Map<String, Object>> selectValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);

    List<Map<String, Object>> selectTimeStatValue(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);

    List<Map<String, Object>> selectGroup(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);

    List<Map<String, Object>> kaoshichengjiSectionStat(@Param("params") Map<String, Object> params,@Param("ew") Wrapper<XueshengchengjiEntity> wrapper);


}
