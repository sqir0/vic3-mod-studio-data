    const VIC3_DATABASE = {
        // ═══════════════════════════════════════════════════════════════
        // TRIGGERS (Koşullar)
        // ═══════════════════════════════════════════════════════════════
        triggers: {
            // Core Logic
            'always': { desc: 'Her zaman evet/hayır | always = yes', scopes: 'any' },
            'AND': { desc: 'Tüm koşullar doğru | AND = { trigger1 trigger2 }', scopes: 'any' },
            'OR': { desc: 'En az biri doğru | OR = { trigger1 trigger2 }', scopes: 'any' },
            'NOT': { desc: 'Koşul yanlış olmalı | NOT = { is_player = yes }', scopes: 'any' },
            'NOR': { desc: 'Tüm koşullar yanlış | NOR = { }', scopes: 'any' },
            'NAND': { desc: 'En az biri yanlış | NAND = { }', scopes: 'any' },
            'if': { desc: 'Koşullu kontrol | if = { limit = { } }', scopes: 'any' },
            'else': { desc: 'Else dalı', scopes: 'any' },
            'else_if': { desc: 'Else-if dalı', scopes: 'any' },
            'trigger_if': { desc: 'Trigger koşulu', scopes: 'any' },
            'trigger_else': { desc: 'Trigger else', scopes: 'any' },
            'trigger_else_if': { desc: 'Trigger else-if', scopes: 'any' },
            'switch': { desc: 'Switch ifadesi | switch = { trigger = x }', scopes: 'any' },
            'custom_tooltip': { desc: 'Özel tooltip | custom_tooltip = "KEY"', scopes: 'any' },
            'hidden_trigger': { desc: 'Gizli trigger | hidden_trigger = { }', scopes: 'any' },
            'custom_description': { desc: 'Özel açıklama', scopes: 'any' },

            // Country Checks
            'is_player': { desc: 'Oyuncu kontrolünde mi | is_player = yes', scopes: 'country' },
            'is_ai': { desc: 'AI kontrolünde mi', scopes: 'country' },
            'is_country_type': { desc: 'Ülke tipi | is_country_type = colonial', scopes: 'country' },
            'is_subject': { desc: 'Vasal mı', scopes: 'country' },
            'is_subject_of': { desc: 'Vasalı mı | is_subject_of = c:GBR', scopes: 'country' },
            'is_overlord': { desc: 'Efendi mi', scopes: 'country' },
            'is_subject_type': { desc: 'Vasal tipi kontrol', scopes: 'country' },
            'is_at_war': { desc: 'Savaşta mı', scopes: 'country' },
            'is_at_war_with': { desc: 'İle savaşta | is_at_war_with = c:FRA', scopes: 'country' },
            'is_in_war_together': { desc: 'Aynı savaşta müttefik', scopes: 'country' },
            'is_neutral_in_war': { desc: 'Savaşta tarafsız', scopes: 'country' },
            'is_revolutionary': { desc: 'Devrimci ülke mi', scopes: 'country' },
            'is_secessionist': { desc: 'Ayrılıkçı mı', scopes: 'country' },
            'is_country_alive': { desc: 'Ülke var mı | exists = c:TAG', scopes: 'country' },
            'is_junior_in_customs_union': { desc: 'Gümrük birliğinde küçük ortak', scopes: 'country' },
            'is_in_customs_union': { desc: 'Gümrük birliğinde', scopes: 'country' },
            'is_in_customs_union_with': { desc: 'İle gümrük birliğinde', scopes: 'country' },
            'is_home_country_for': { desc: 'Kültür için ana ülke | is_home_country_for = cu:british', scopes: 'country' },
            'is_banning_goods': { desc: 'Mal yasaklıyor mu', scopes: 'country' },
            'country_rank': { desc: 'Ülke rütbesi | country_rank >= rank_value:major_power', scopes: 'country' },
            'country_gdp': { desc: 'Ülke GSYİH kontrol', scopes: 'country' },
            'country_population': { desc: 'Ülke nüfusu', scopes: 'country' },
            'country_has_primary_culture': { desc: 'Birincil kültür mü', scopes: 'country' },

            // Law Related
            'has_law': { desc: 'Yasaya sahip | has_law = law_type:law_monarchy', scopes: 'country' },
            'has_law_or_variant': { desc: 'Yasa veya varyant var', scopes: 'country' },
            'is_enacting_law': { desc: 'Yasa çıkarılıyor | is_enacting_law = law_type:law_voting', scopes: 'country' },
            'can_be_enacted': { desc: 'Yasa çıkarılabilir mi', scopes: 'country' },
            'enactment_chance': { desc: 'Çıkarma şansı', scopes: 'country' },
            'enactment_phase': { desc: 'Çıkarma aşaması', scopes: 'country' },
            'law_stance': { desc: 'IG yasa tutumu | law_stance = { law = x value > neutral }', scopes: 'interest_group' },

            // Technology
            'has_technology_researched': { desc: 'Teknoloji araştırılmış | has_technology_researched = tech_name', scopes: 'country' },
            'has_technology_progress': { desc: 'Araştırma ilerlemesi', scopes: 'country' },
            'can_research': { desc: 'Araştırabilir mi', scopes: 'country' },
            'is_researching_technology': { desc: 'Araştırıyor mu', scopes: 'country' },

            // Modifiers & Variables
            'has_modifier': { desc: 'Modifier var | has_modifier = name', scopes: 'country, state, character, ig, building' },
            'has_variable': { desc: 'Değişken var | has_variable = my_var', scopes: 'any' },
            'has_global_variable': { desc: 'Global değişken var', scopes: 'any' },
            'has_local_variable': { desc: 'Lokal değişken var', scopes: 'any' },
            'is_target_in_variable_list': { desc: 'Hedef listede mi', scopes: 'any' },
            'is_target_in_global_variable_list': { desc: 'Global listede mi', scopes: 'any' },
            'list_size': { desc: 'Liste boyutu | list_size = { name = my_list value >= 5 }', scopes: 'any' },
            'global_list_size': { desc: 'Global liste boyutu', scopes: 'any' },

            // Diplomatic Play
            'is_diplomatic_play_type': { desc: 'Diplomatik oyun tipi', scopes: 'diplomatic_play' },
            'is_diplomatic_play_committed_participant': { desc: 'Oyuna bağlı mı', scopes: 'country' },
            'is_diplomatic_play_initiator': { desc: 'Başlatan mı', scopes: 'country' },
            'is_diplomatic_play_target': { desc: 'Hedef mi', scopes: 'country' },
            'is_diplomatic_play_ally_of': { desc: 'Oyunda müttefik', scopes: 'country' },
            'is_diplomatic_play_enemy_of': { desc: 'Oyunda düşman', scopes: 'country' },
            'is_war': { desc: 'Savaşa dönüştü mü', scopes: 'diplomatic_play' },

            // Relations & Diplomacy
            'has_diplomatic_pact': { desc: 'Diplomatik pakt var | has_diplomatic_pact = { who = c:TAG type = alliance }', scopes: 'country' },
            'has_diplomatic_relevance': { desc: 'Diplomatik ilgi var', scopes: 'country' },
            'has_war_goal': { desc: 'Savaş hedefi var', scopes: 'country' },
            'has_war_exhaustion': { desc: 'Savaş yorgunluğu | has_war_exhaustion >= 50', scopes: 'country' },
            'has_war_support': { desc: 'Savaş desteği', scopes: 'country' },
            'has_truce_with': { desc: 'Ateşkes var | has_truce_with = c:TAG', scopes: 'country' },
            'has_interest_marker_in_region': { desc: 'Bölgede ilgi var', scopes: 'country' },
            'has_claim': { desc: 'Hak iddiası var | has_claim = s:STATE', scopes: 'country' },
            'has_secret_goal': { desc: 'Gizli hedef var', scopes: 'country' },
            'has_attitude': { desc: 'AI tutumu | has_attitude = { who = c:TAG attitude = genial }', scopes: 'country' },
            'has_strategy': { desc: 'AI stratejisi', scopes: 'country' },

            // Government & Politics
            'has_government_type': { desc: 'Hükümet tipi | has_government_type = gov_type', scopes: 'country' },
            'has_institution': { desc: 'Kurum var | has_institution = institution_type', scopes: 'country' },
            'has_ruling_interest_group': { desc: 'Yönetici IG | has_ruling_interest_group = ig:ig_landowners', scopes: 'country' },
            'has_party': { desc: 'Parti aktif mi', scopes: 'country' },
            'has_ruler': { desc: 'Lider var mı', scopes: 'country' },
            'has_heir': { desc: 'Varis var mı', scopes: 'country' },
            'ruler_exists': { desc: 'Lider mevcut mu', scopes: 'country' },
            'heir_exists': { desc: 'Varis mevcut mu', scopes: 'country' },
            'can_have_subjects': { desc: 'Vasal sahibi olabilir', scopes: 'country' },
            'can_form_nation': { desc: 'Ulus kurabilir | can_form_nation = TAG', scopes: 'country' },
            'can_have_heir': { desc: 'Varis sahibi olabilir', scopes: 'country' },

            // Interest Group
            'is_interest_group_type': { desc: 'IG tipi | is_interest_group_type = ig:ig_landowners', scopes: 'interest_group' },
            'is_marginal': { desc: 'IG marjinal mi', scopes: 'interest_group' },
            'is_powerful': { desc: 'IG güçlü mü', scopes: 'interest_group' },
            'is_in_government': { desc: 'Hükümette mi', scopes: 'interest_group' },
            'is_in_opposition': { desc: 'Muhalefette mi', scopes: 'interest_group' },
            'has_ideology': { desc: 'İdeoloji var | has_ideology = ideology:ideology_name', scopes: 'interest_group' },
            'ig_clout': { desc: 'IG nüfuzu | ig_clout >= 0.2', scopes: 'interest_group' },
            'ig_approval': { desc: 'IG onayı | ig_approval >= 5', scopes: 'interest_group' },
            'political_strength': { desc: 'Siyasi güç', scopes: 'interest_group' },
            'clout': { desc: 'Siyasi nüfuz', scopes: 'interest_group' },

            // State
            'is_capital': { desc: 'Başkent mi', scopes: 'state' },
            'is_incorporated': { desc: 'Entegre mi', scopes: 'state' },
            'is_split_state': { desc: 'Bölünmüş mü', scopes: 'state' },
            'is_treaty_port': { desc: 'Anlaşma limanı mı', scopes: 'state' },
            'is_homeland': { desc: 'Anavatan mı | is_homeland = cu:culture', scopes: 'state' },
            'is_coastal': { desc: 'Kıyı eyaleti mi', scopes: 'state' },
            'is_adjacent_to_water': { desc: 'Suya bitişik mi', scopes: 'state' },
            'is_isolated_from_market': { desc: 'Pazardan izole', scopes: 'state' },
            'is_slave_state': { desc: 'Kölelik var mı', scopes: 'state' },
            'has_building': { desc: 'Bina var | has_building = building_type', scopes: 'state' },
            'has_decree': { desc: 'Kararname aktif | has_decree = decree_name', scopes: 'state' },
            'state_has_building': { desc: 'Eyalette bina var', scopes: 'state' },
            'state_has_goods': { desc: 'Mal üretiliyor', scopes: 'state' },
            'state_is_in_market': { desc: 'Pazarda mı', scopes: 'state' },
            'owns_entire_state_region': { desc: 'Tüm bölgeye sahip', scopes: 'country' },
            'owner_exists': { desc: 'Sahip mevcut mu', scopes: 'state' },
            'is_in_geographic_region': { desc: 'Coğrafi bölgede | is_in_geographic_region = region_europe', scopes: 'state, country' },
            'has_homeland': { desc: 'Anavatan var | has_homeland = cu:culture', scopes: 'culture, state' },
            'region': { desc: 'Eyalet bölgesi | region = sr:region_name', scopes: 'state' },
            'turmoil': { desc: 'Kargaşa seviyesi | turmoil >= 0.5', scopes: 'state' },
            'infrastructure': { desc: 'Altyapı seviyesi', scopes: 'state' },
            'infrastructure_usage': { desc: 'Altyapı kullanımı', scopes: 'state' },
            'market_access': { desc: 'Pazar erişimi', scopes: 'state' },
            'state_population': { desc: 'Eyalet nüfusu', scopes: 'state' },
            'free_arable_land': { desc: 'Boş ekilebilir arazi', scopes: 'state' },
            'used_arable_land': { desc: 'Kullanılan arazi', scopes: 'state' },
            'total_arable_land': { desc: 'Toplam arazi', scopes: 'state' },
            'building_levels': { desc: 'Bina seviyeleri', scopes: 'state' },

            // Building
            'is_production_method_active': { desc: 'PM aktif mi | is_production_method_active = pm_name', scopes: 'building' },
            'is_subsistence_building': { desc: 'Geçimlik bina mı', scopes: 'building' },
            'is_government_funded': { desc: 'Devlet fonlu mu', scopes: 'building' },
            'is_building_type': { desc: 'Bina tipi | is_building_type = building_factory', scopes: 'building' },
            'is_building_group': { desc: 'Bina grubu | is_building_group = bg_agriculture', scopes: 'building' },

            // Character
            'is_character_alive': { desc: 'Karakter hayatta', scopes: 'character' },
            'is_busy': { desc: 'Meşgul mü', scopes: 'character' },
            'is_traveling': { desc: 'Seyahatte mi', scopes: 'character' },
            'is_in_exile': { desc: 'Sürgünde mi', scopes: 'character' },
            'is_ruler': { desc: 'Lider mi', scopes: 'character' },
            'is_heir': { desc: 'Varis mi', scopes: 'character' },
            'is_general': { desc: 'General mi', scopes: 'character' },
            'is_admiral': { desc: 'Amiral mi', scopes: 'character' },
            'is_commander': { desc: 'Komutan mı', scopes: 'character' },
            'is_politically_active': { desc: 'Siyasi aktif', scopes: 'character' },
            'is_female': { desc: 'Kadın mı', scopes: 'character' },
            'is_male': { desc: 'Erkek mi', scopes: 'character' },
            'has_trait': { desc: 'Özellik var | has_trait = trait_name', scopes: 'character' },
            'has_commander': { desc: 'Komutan var', scopes: 'character' },
            'has_commander_rank': { desc: 'Komutan rütbesi', scopes: 'character' },
            'has_role': { desc: 'Karakter rolü', scopes: 'character' },
            'has_secret': { desc: 'Sır var mı', scopes: 'character' },
            'age': { desc: 'Karakter yaşı | age >= 30', scopes: 'character' },
            'character_is_discriminated': { desc: 'Ayrımcılığa uğruyor', scopes: 'character' },
            'is_at_front': { desc: 'Cephede mi', scopes: 'character' },

            // Pop
            'is_pop_type': { desc: 'Pop tipi | is_pop_type = aristocrats', scopes: 'pop' },
            'is_employed': { desc: 'Çalışıyor mu', scopes: 'pop' },
            'is_unemployed': { desc: 'İşsiz mi', scopes: 'pop' },
            'pop_has_culture': { desc: 'Pop kültürü var', scopes: 'pop' },
            'pop_has_religion': { desc: 'Pop dini var', scopes: 'pop' },
            'pop_employment_building': { desc: 'Çalıştıran bina', scopes: 'pop' },
            'pop_is_discriminated': { desc: 'Ayrımcılığa uğruyor', scopes: 'pop' },
            'literacy_rate': { desc: 'Okur-yazarlık | literacy_rate >= 0.5', scopes: 'pop, state, country' },
            'standard_of_living': { desc: 'Yaşam standardı | standard_of_living >= 15', scopes: 'pop' },

            // Culture & Religion
            'has_culture': { desc: 'Kültür var', scopes: 'country, state, pop' },
            'has_religion': { desc: 'Din var', scopes: 'country, state, pop' },
            'has_state_religion': { desc: 'Devlet dini', scopes: 'country' },
            'has_discrimination_trait': { desc: 'Ayrımcılık özelliği', scopes: 'country' },
            'religion_accepted': { desc: 'Din kabul edilmiş', scopes: 'country' },
            'culture_accepted': { desc: 'Kültür kabul edilmiş', scopes: 'country' },
            'has_cultural_community': { desc: 'Kültürel topluluk var', scopes: 'state' },
            'culture_can_have_mass_migration_to_country': { desc: 'Göç edebilir', scopes: 'culture' },
            'culture_percent_country': { desc: 'Ülkedeki kültür %', scopes: 'country' },
            'culture_percent_state': { desc: 'Eyaletteki kültür %', scopes: 'state' },
            'religion_percent_country': { desc: 'Ülkedeki din %', scopes: 'country' },
            'religion_percent_state': { desc: 'Eyaletteki din %', scopes: 'state' },

            // Military
            'is_mobilized': { desc: 'Seferber mi', scopes: 'country' },
            'is_navy': { desc: 'Donanma mı', scopes: 'military_formation' },
            'is_army': { desc: 'Ordu mu', scopes: 'military_formation' },
            'has_military_formation': { desc: 'Askeri birlik var', scopes: 'country' },
            'army_size': { desc: 'Ordu büyüklüğü | army_size >= 100', scopes: 'country' },
            'navy_size': { desc: 'Donanma büyüklüğü | navy_size >= 50', scopes: 'country' },
            'num_commanders': { desc: 'Komutan sayısı', scopes: 'country' },
            'num_generals': { desc: 'General sayısı', scopes: 'country' },
            'num_admirals': { desc: 'Amiral sayısı', scopes: 'country' },

            // War
            'is_defender_warleader': { desc: 'Savunma lideri mi', scopes: 'country, war' },
            'is_attacker_warleader': { desc: 'Saldırı lideri mi', scopes: 'country, war' },
            'is_losing_war': { desc: 'Savaşı kaybediyor', scopes: 'country' },
            'is_winning_war': { desc: 'Savaşı kazanıyor', scopes: 'country' },
            'has_active_peace_deal': { desc: 'Aktif barış anlaşması', scopes: 'country' },
            'has_convoys_being_sunk': { desc: 'Konvoylar batırılıyor', scopes: 'country' },

            // Civil War
            'any_civil_war': { desc: 'İç savaş var mı', scopes: 'country' },
            'civil_war_progress': { desc: 'İç savaş ilerlemesi | civil_war_progress >= 0.75', scopes: 'civil_war' },
            'is_civil_war_type': { desc: 'İç savaş tipi | is_civil_war_type = revolution', scopes: 'civil_war' },

            // Stats & Values
            'prestige': { desc: 'Prestij | prestige >= 100', scopes: 'country' },
            'infamy': { desc: 'Şöhret | infamy <= 25', scopes: 'country' },
            'authority': { desc: 'Otorite', scopes: 'country' },
            'bureaucracy': { desc: 'Bürokrasi dengesi', scopes: 'country' },
            'influence': { desc: 'Etki', scopes: 'country' },
            'gold_reserves': { desc: 'Altın rezervi | gold_reserves >= 1000000', scopes: 'country' },
            'gold_reserves_limit': { desc: 'Altın rezerv limiti', scopes: 'country' },
            'tax_capacity': { desc: 'Vergi kapasitesi', scopes: 'country' },
            'tax_capacity_usage': { desc: 'Vergi kullanımı', scopes: 'country' },
            'average_sol': { desc: 'Ort. yaşam standardı', scopes: 'country' },
            'average_expected_sol': { desc: 'Beklenen yaşam standardı', scopes: 'country' },
            'country_turmoil': { desc: 'Ülke kargaşası', scopes: 'country' },
            'investment_pool': { desc: 'Yatırım havuzu', scopes: 'country' },
            'gdp': { desc: 'GSYİH', scopes: 'country' },
            'weekly_net_fixed_income': { desc: 'Haftalık gelir', scopes: 'country' },
            'economy_of_scale': { desc: 'Ölçek ekonomisi', scopes: 'country' },
            'scaled_debt': { desc: 'Ölçekli borç', scopes: 'country' },
            'scaled_gold_reserves': { desc: 'Ölçekli altın', scopes: 'country' },
            'has_healthy_economy': { desc: 'Sağlıklı ekonomi', scopes: 'country' },
            'taking_loans': { desc: 'Borç alıyor', scopes: 'country' },
            'num_states': { desc: 'Eyalet sayısı | num_states >= 10', scopes: 'country' },
            'num_incorporated_states': { desc: 'Entegre eyalet sayısı', scopes: 'country' },
            'num_treaty_ports': { desc: 'Anlaşma limanı sayısı', scopes: 'country' },
            'rank_value': { desc: 'Rütbe değeri | country_rank >= rank_value:major_power', scopes: 'any' },

            // Time
            'year': { desc: 'Yıl | year >= 1850', scopes: 'any' },
            'month': { desc: 'Ay', scopes: 'any' },
            'week_count': { desc: 'Hafta sayısı', scopes: 'any' },
            'current_date': { desc: 'Geçerli tarih', scopes: 'any' },
            'game_date': { desc: 'Oyun tarihi | game_date > 1836.1.1', scopes: 'any' },

            // Journal & Decisions
            'has_journal_entry': { desc: 'Günlük girişi var | has_journal_entry = je_name', scopes: 'country' },
            'is_goal_complete': { desc: 'Hedef tamamlandı', scopes: 'journal_entry' },
            'can_take_decision': { desc: 'Karar alabilir', scopes: 'country' },
            'can_have_political_movement': { desc: 'Hareket olabilir', scopes: 'country' },
            'can_establish_company': { desc: 'Şirket kurabilir', scopes: 'country' },
            'has_company': { desc: 'Şirketi var', scopes: 'country' },

            // Iteration Triggers
            'any_country': { desc: 'Herhangi ülke | any_country = { limit = { } }', scopes: 'any' },
            'any_state': { desc: 'Herhangi eyalet', scopes: 'country' },
            'any_scope_state': { desc: 'Kapsam eyaletleri', scopes: 'country' },
            'any_scope_pop': { desc: 'Kapsam popları', scopes: 'state' },
            'any_scope_character': { desc: 'Kapsam karakterleri', scopes: 'country' },
            'any_scope_building': { desc: 'Kapsam binaları', scopes: 'state' },
            'any_interest_group': { desc: 'Herhangi IG', scopes: 'country' },
            'any_political_movement': { desc: 'Siyasi hareketler', scopes: 'country' },
            'any_diplomatic_play': { desc: 'Diplomatik oyunlar', scopes: 'any' },
            'any_war': { desc: 'Herhangi savaş', scopes: 'any' },
            'any_primary_culture': { desc: 'Birincil kültürler', scopes: 'country' },
            'any_accepted_culture': { desc: 'Kabul edilen kültürler', scopes: 'country' },
            'any_neighbouring_state': { desc: 'Komşu eyaletler', scopes: 'state' },
            'any_scope_admiral': { desc: 'Kapsam amiralleri', scopes: 'country' },
            'any_scope_general': { desc: 'Kapsam generalleri', scopes: 'country' },
            'any_in_list': { desc: 'Liste öğeleri', scopes: 'any' },
            'any_in_global_list': { desc: 'Global liste öğeleri', scopes: 'any' },
            'exists': { desc: 'Var mı | exists = c:TAG', scopes: 'any' },
        },

        // ═══════════════════════════════════════════════════════════════
        // EFFECTS (Efektler)
        // ═══════════════════════════════════════════════════════════════
        effects: {
            // Variable Management
            'set_variable': { desc: 'Değişken ayarla | set_variable = { name = x value = 10 }', scopes: 'any' },
            'set_global_variable': { desc: 'Global değişken ayarla', scopes: 'any' },
            'set_local_variable': { desc: 'Lokal değişken ayarla', scopes: 'any' },
            'change_variable': { desc: 'Değişkeni değiştir | change_variable = { name = x add = 5 }', scopes: 'any' },
            'change_global_variable': { desc: 'Global değişkeni değiştir', scopes: 'any' },
            'change_local_variable': { desc: 'Lokal değişkeni değiştir', scopes: 'any' },
            'clamp_variable': { desc: 'Değişkeni sınırla | clamp_variable = { name = x min = 0 max = 100 }', scopes: 'any' },
            'remove_variable': { desc: 'Değişkeni kaldır | remove_variable = my_var', scopes: 'any' },
            'remove_global_variable': { desc: 'Global değişkeni kaldır', scopes: 'any' },
            'remove_local_variable': { desc: 'Lokal değişkeni kaldır', scopes: 'any' },
            'add_to_list': { desc: 'Listeye ekle | add_to_list = my_list', scopes: 'any' },
            'add_to_global_variable_list': { desc: 'Global listeye ekle', scopes: 'any' },
            'add_to_temporary_list': { desc: 'Geçici listeye ekle', scopes: 'any' },
            'remove_from_list': { desc: 'Listeden çıkar', scopes: 'any' },
            'remove_list_variable': { desc: 'Liste değişkenini kaldır', scopes: 'any' },
            'clear_variable_list': { desc: 'Listeyi temizle', scopes: 'any' },
            'clear_global_variable_list': { desc: 'Global listeyi temizle', scopes: 'any' },
            'clear_saved_scope': { desc: 'Kaydedilmiş kapsamı temizle', scopes: 'any' },

            // Modifiers
            'add_modifier': { desc: 'Modifier ekle | add_modifier = { name = x months = 12 }', scopes: 'country, state, character, ig, building' },
            'remove_modifier': { desc: 'Modifier kaldır | remove_modifier = modifier_name', scopes: 'country, state, character, ig, building' },

            // Country - Treasury & Economy
            'add_treasury': { desc: 'Para ekle/çıkar | add_treasury = 100000', scopes: 'country' },
            'take_on_scaled_debt': { desc: 'Ölçekli borç al', scopes: 'country' },

            // Country - Technology
            'add_technology_progress': { desc: 'Araştırma ilerlemesi ekle', scopes: 'country' },
            'add_technology_researched': { desc: 'Teknolojiyi araştır | add_technology_researched = tech_name', scopes: 'country' },
            'add_era_researched': { desc: 'Tüm çağı araştır', scopes: 'country' },

            // Country - Claims & Interest
            'add_claim': { desc: 'Hak iddiası ekle | add_claim = s:STATE', scopes: 'country' },
            'remove_claim': { desc: 'Hak iddiası kaldır', scopes: 'country' },
            'add_declared_interest': { desc: 'İlgi ekle', scopes: 'country' },

            // Country - Journal
            'add_journal_entry': { desc: 'Günlük girişi ekle | add_journal_entry = { type = je_name }', scopes: 'country' },
            'remove_journal_entry': { desc: 'Günlük girişi kaldır', scopes: 'country' },

            // Country - Culture
            'add_primary_culture': { desc: 'Birincil kültür ekle | add_primary_culture = cu:culture', scopes: 'country' },
            'remove_primary_culture': { desc: 'Birincil kültürü kaldır', scopes: 'country' },
            'add_accepted_culture': { desc: 'Kültür kabul et', scopes: 'country' },
            'remove_accepted_culture': { desc: 'Kültür kabulünü kaldır', scopes: 'country' },
            'add_cultural_obsession': { desc: 'Kültürel takıntı ekle', scopes: 'country' },
            'remove_cultural_obsession': { desc: 'Kültürel takıntıyı kaldır', scopes: 'country' },

            // Country - Stats
            'add_prestige': { desc: 'Prestij ekle | add_prestige = 100', scopes: 'country' },
            'add_authority': { desc: 'Otorite ekle', scopes: 'country' },
            'add_influence': { desc: 'Etki ekle', scopes: 'country' },
            'change_infamy': { desc: 'Şöhreti değiştir | change_infamy = 10', scopes: 'country' },
            'change_tension': { desc: 'Gerilimi değiştir', scopes: 'country' },

            // Country - Laws
            'start_enactment': { desc: 'Yasa çıkarmayı başlat | start_enactment = law_type:law_name', scopes: 'country' },
            'cancel_enactment': { desc: 'Yasa çıkarmayı iptal et', scopes: 'country' },
            'activate_law': { desc: 'Yasayı aktifleştir | activate_law = law_type:law_name', scopes: 'country' },
            'deactivate_law': { desc: 'Yasayı devre dışı bırak', scopes: 'country' },
            'deactivate_parties': { desc: 'Partileri devre dışı bırak', scopes: 'country' },

            // Country - Government
            'add_ruling_interest_group': { desc: 'IG\'yi hükümete ekle', scopes: 'country' },
            'remove_ruling_interest_group': { desc: 'IG\'yi hükümetten çıkar', scopes: 'country' },
            'set_ruling_party': { desc: 'Yönetici partiyi ayarla', scopes: 'country' },
            'set_only_legal_party_from_ig': { desc: 'Tek yasal partiyi ayarla', scopes: 'country' },
            'call_election': { desc: 'Seçim çağır', scopes: 'country' },
            'government_transfer_of_power': { desc: 'İktidar transferi', scopes: 'country' },
            'change_to_dictatorial': { desc: 'Diktatörlüğe geç', scopes: 'country' },
            'change_to_hereditary': { desc: 'Kalıtsal sisteme geç', scopes: 'country' },
            'change_to_parliamentary_elective': { desc: 'Parlamenter seçime geç', scopes: 'country' },
            'change_to_presidential_elective': { desc: 'Başkanlık seçimine geç', scopes: 'country' },
            'set_country_type': { desc: 'Ülke tipini ayarla', scopes: 'country' },

            // Country - Subjects & Independence
            'annex': { desc: 'İlhak et | annex = c:TAG', scopes: 'country' },
            'make_independent': { desc: 'Bağımsız yap | make_independent = yes', scopes: 'country' },
            'create_puppet': { desc: 'Kukla devlet oluştur', scopes: 'country' },
            'change_tag': { desc: 'Ülke etiketini değiştir', scopes: 'country' },
            'change_subject_type': { desc: 'Vasal tipini değiştir', scopes: 'country' },

            // Country - Creation
            'create_country': { desc: 'Ülke oluştur | create_country = { tag = TAG }', scopes: 'any' },

            // Country - Diplomacy
            'create_diplomatic_pact': { desc: 'Pakt oluştur | create_diplomatic_pact = { type = alliance }', scopes: 'country' },
            'remove_diplomatic_pact': { desc: 'Pakt kaldır', scopes: 'country' },
            'create_truce': { desc: 'Ateşkes oluştur | create_truce = { target = c:TAG months = 60 }', scopes: 'country' },
            'set_relations': { desc: 'İlişki seviyesini ayarla', scopes: 'country' },
            'change_relations': { desc: 'İlişkileri değiştir | change_relations = { country = c:TAG value = 20 }', scopes: 'country' },
            'set_secret_goal': { desc: 'Gizli hedef ayarla', scopes: 'country' },
            'set_mutual_secret_goal': { desc: 'Karşılıklı gizli hedef', scopes: 'country' },
            'set_owes_obligation_to': { desc: 'Borçlu olduğunu ayarla', scopes: 'country' },
            'create_incident': { desc: 'Olay oluştur', scopes: 'country' },
            'create_diplomatic_catalyst': { desc: 'Katalizör oluştur', scopes: 'country' },
            'create_diplomatic_play': { desc: 'Diplomatik oyun oluştur', scopes: 'country' },
            'add_initiator_backers': { desc: 'Başlatıcı destekçileri ekle', scopes: 'diplomatic_play' },
            'add_target_backers': { desc: 'Hedef destekçileri ekle', scopes: 'diplomatic_play' },

            // War
            'add_war_goal': { desc: 'Savaş hedefi ekle', scopes: 'diplomatic_play, war' },
            'remove_war_goal': { desc: 'Savaş hedefini kaldır', scopes: 'diplomatic_play, war' },
            'add_war_exhaustion': { desc: 'Savaş yorgunluğu ekle', scopes: 'country' },
            'end_war': { desc: 'Savaşı bitir', scopes: 'war' },

            // Revolution
            'abandon_revolution': { desc: 'Devrimi terk et', scopes: 'country' },
            'capitulate_to_revolution': { desc: 'Devrime teslim ol', scopes: 'country' },

            // Trade
            'create_trade_route': { desc: 'Ticaret rotası oluştur', scopes: 'country, market' },

            // State - Ownership
            'set_state_owner': { desc: 'Eyalet sahibini değiştir | set_state_owner = c:TAG', scopes: 'state' },
            'transfer_state': { desc: 'Eyaleti aktar', scopes: 'state' },
            'set_state_type': { desc: 'Eyalet tipini ayarla', scopes: 'state' },
            'set_capital': { desc: 'Başkent yap', scopes: 'state' },
            'transfer_province': { desc: 'Vilayeti aktar', scopes: 'state' },
            'set_owner_of_provinces': { desc: 'Vilayet sahibini ayarla', scopes: 'state' },

            // State - Buildings
            'create_building': { desc: 'Bina oluştur | create_building = { type = x level = 5 }', scopes: 'state' },
            'add_building': { desc: 'Bina seviyesi ekle', scopes: 'state' },
            'remove_building': { desc: 'Bina seviyesi kaldır', scopes: 'state' },

            // State - Population
            'add_radicals': { desc: 'Radikal ekle | add_radicals = { value = 0.1 }', scopes: 'state, country' },
            'add_loyalists': { desc: 'Sadık ekle | add_loyalists = { value = 0.1 }', scopes: 'state, country' },
            'add_radicals_in_state': { desc: 'Eyalette radikal ekle', scopes: 'state' },
            'add_loyalists_in_state': { desc: 'Eyalette sadık ekle', scopes: 'state' },
            'add_cultural_acceptance': { desc: 'Kültürel kabulü değiştir', scopes: 'country' },
            'add_culture_standard_of_living_modifier': { desc: 'Kültür yaşam standardı modifier', scopes: 'state' },
            'convert_population': { desc: 'Nüfusu dönüştür', scopes: 'state' },
            'kill_population_percent_in_state': { desc: 'Nüfus yüzdesi öldür', scopes: 'state' },
            'add_devastation': { desc: 'Yıkım ekle', scopes: 'state' },

            // State - Naming
            'set_state_name': { desc: 'Eyalet adını ayarla', scopes: 'state' },
            'reset_state_name': { desc: 'Eyalet adını sıfırla', scopes: 'state' },
            'set_hub_name': { desc: 'Merkez adını ayarla', scopes: 'state' },

            // Character - Creation & Death
            'create_character': { desc: 'Karakter oluştur | create_character = { }', scopes: 'country' },
            'kill_character': { desc: 'Karakteri öldür', scopes: 'character' },
            'exile_character': { desc: 'Karakteri sürgün et', scopes: 'character' },
            'free_character_from_void': { desc: 'Boşluktan kurtar', scopes: 'character' },
            'place_character_in_void': { desc: 'Boşluğa koy', scopes: 'character' },
            'transfer_character': { desc: 'Karakteri aktar', scopes: 'character' },

            // Character - Traits & Roles
            'add_trait': { desc: 'Özellik ekle | add_trait = trait_name', scopes: 'character' },
            'remove_trait': { desc: 'Özellik kaldır', scopes: 'character' },
            'add_character_role': { desc: 'Karakter rolü ekle', scopes: 'character' },
            'remove_character_role': { desc: 'Karakter rolünü kaldır', scopes: 'character' },
            'add_ideology': { desc: 'İdeoloji ekle', scopes: 'character' },
            'remove_ideology': { desc: 'İdeolojiyi kaldır', scopes: 'character' },
            'set_ideology': { desc: 'İdeolojiyi ayarla', scopes: 'character' },
            'set_as_interest_group_leader': { desc: 'IG lideri yap', scopes: 'character' },
            'set_character_as_ruler': { desc: 'Lider yap', scopes: 'character' },
            'set_heir': { desc: 'Varis ayarla', scopes: 'country' },
            'disinherit_character': { desc: 'Mirası al', scopes: 'character' },
            'set_character_immortal': { desc: 'Ölümsüz yap', scopes: 'character' },
            'set_character_busy_and_immortal': { desc: 'Meşgul ve ölümsüz', scopes: 'character' },

            // Character - Commander
            'add_commander_rank': { desc: 'Komutan rütbesi ekle', scopes: 'character' },

            // Military
            'create_military_formation': { desc: 'Askeri birlik oluştur', scopes: 'country' },

            // Interest Group
            'set_interest_group_name': { desc: 'IG adını ayarla', scopes: 'interest_group' },
            'set_core_ideology': { desc: 'Çekirdek ideolojiyi ayarla', scopes: 'interest_group' },

            // Mass Migration
            'create_mass_migration': { desc: 'Kitle göçü oluştur | create_mass_migration = { origin = c:TAG culture = cu:culture }', scopes: 'state' },

            // Events & Notifications
            'trigger_event': { desc: 'Event tetikle | trigger_event = { id = event.1 }', scopes: 'country, state, character' },
            'post_notification': { desc: 'Bildirim gönder', scopes: 'country' },
            'popup': { desc: 'Popup göster', scopes: 'country' },

            // Iteration Effects
            'every_country': { desc: 'Tüm ülkeleri döngüle | every_country = { limit = { } }', scopes: 'any' },
            'every_state': { desc: 'Sahip olunan eyaletleri döngüle', scopes: 'country' },
            'every_scope_state': { desc: 'Kapsam eyaletlerini döngüle', scopes: 'country' },
            'every_scope_pop': { desc: 'Kapsam poplarını döngüle', scopes: 'state' },
            'every_scope_character': { desc: 'Kapsam karakterlerini döngüle', scopes: 'country' },
            'every_scope_building': { desc: 'Kapsam binalarını döngüle', scopes: 'state' },
            'every_interest_group': { desc: 'IG\'leri döngüle', scopes: 'country' },
            'every_political_movement': { desc: 'Siyasi hareketleri döngüle', scopes: 'country' },
            'every_political_lobby': { desc: 'Siyasi lobileri döngüle', scopes: 'country' },
            'every_in_list': { desc: 'Liste öğelerini döngüle', scopes: 'any' },
            'every_neighbouring_state': { desc: 'Komşu eyaletleri döngüle', scopes: 'state' },
            'every_state_region': { desc: 'Eyalet bölgelerini döngüle', scopes: 'any' },
            'every_scope_war': { desc: 'Kapsam savaşlarını döngüle', scopes: 'country' },
            'every_scope_treaty': { desc: 'Kapsam antlaşmalarını döngüle', scopes: 'country' },
            'every_power_bloc': { desc: 'Güç bloklarını döngüle', scopes: 'any' },
            'every_power_bloc_member': { desc: 'Güç bloğu üyelerini döngüle', scopes: 'power_bloc' },
            'every_law': { desc: 'Yasaları döngüle', scopes: 'country' },
            'every_scope_culture': { desc: 'Kapsam kültürlerini döngüle', scopes: 'country, state' },
            'every_scope_amendment': { desc: 'Kapsam değişikliklerini döngüle', scopes: 'treaty' },
            'every_diplomatically_relevant_country': { desc: 'Diplomatik ilgili ülkeleri döngüle', scopes: 'country' },
            'every_subject_or_below': { desc: 'Vasalları döngüle', scopes: 'country' },
            'every_princely_state': { desc: 'Prenslik devletlerini döngüle', scopes: 'country' },

            // Random Effects
            'random_country': { desc: 'Rastgele ülke | random_country = { limit = { } }', scopes: 'any' },
            'random_state': { desc: 'Rastgele eyalet', scopes: 'country' },
            'random_scope_state': { desc: 'Rastgele kapsam eyaleti', scopes: 'country' },
            'random_scope_pop': { desc: 'Rastgele kapsam popu', scopes: 'state' },
            'random_interest_group': { desc: 'Rastgele IG', scopes: 'country' },
            'random_character': { desc: 'Rastgele karakter', scopes: 'country' },
            'random_character_in_exile_pool': { desc: 'Sürgündeki rastgele karakter', scopes: 'country' },
            'random_character_in_void': { desc: 'Boşluktaki rastgele karakter', scopes: 'any' },
            'random_scope_building': { desc: 'Rastgele kapsam binası', scopes: 'state' },
            'random_scope_culture': { desc: 'Rastgele kapsam kültürü', scopes: 'country, state' },
            'random_neighbouring_state': { desc: 'Rastgele komşu eyalet', scopes: 'state' },
            'random_political_movement': { desc: 'Rastgele siyasi hareket', scopes: 'country' },
            'random_diplomatic_play': { desc: 'Rastgele diplomatik oyun', scopes: 'any' },
            'random_law': { desc: 'Rastgele yasa', scopes: 'country' },
            'random_primary_culture': { desc: 'Rastgele birincil kültür', scopes: 'country' },
            'random_list': { desc: 'Ağırlıklı rastgele liste | random_list = { 50 = { } 50 = { } }', scopes: 'any' },

            // Ordered Effects
            'ordered_country': { desc: 'Sıralı ülkeler | ordered_country = { order_by = gdp }', scopes: 'any' },
            'ordered_state': { desc: 'Sıralı eyaletler', scopes: 'country' },
            'ordered_scope_state': { desc: 'Sıralı kapsam eyaletleri', scopes: 'country' },
            'ordered_interest_group': { desc: 'Sıralı IG\'ler', scopes: 'country' },
            'order_by': { desc: 'Sıralama değeri | order_by = value', scopes: 'ordered_*' },
            'position': { desc: 'Listede konum | position = 0', scopes: 'ordered_*' },
            'check_range_bounds': { desc: 'Konum aralık kontrolü | check_range_bounds = no', scopes: 'ordered_*' },

            // Control Flow
            'if': { desc: 'Koşullu efekt | if = { limit = { } }', scopes: 'any' },
            'else': { desc: 'Else dalı', scopes: 'any' },
            'else_if': { desc: 'Else-if dalı', scopes: 'any' },
            'while': { desc: 'Döngü | while = { limit = { } }', scopes: 'any' },
            'switch': { desc: 'Switch ifadesi', scopes: 'any' },
            'random': { desc: 'Rastgele çalıştır | random = { chance = 50 }', scopes: 'any' },

            // Scope Saving
            'save_scope_as': { desc: 'Kapsamı kaydet | save_scope_as = my_scope', scopes: 'any' },
            'save_scope_value_as': { desc: 'Değeri kapsam olarak kaydet', scopes: 'any' },
            'save_temporary_scope_as': { desc: 'Geçici kapsamı kaydet', scopes: 'any' },
            'save_temporary_scope_value_as': { desc: 'Geçici kapsam değeri kaydet', scopes: 'any' },

            // Tooltip
            'show_as_tooltip': { desc: 'Sadece tooltip\'te göster', scopes: 'any' },
            'hidden_effect': { desc: 'Gizli efekt | hidden_effect = { }', scopes: 'any' },

            // Debug
            'debug_log_scopes': { desc: 'Kapsamları logla', scopes: 'any' },

            // Misc
            'play_as': { desc: 'Ülke olarak oyna', scopes: 'country' },
            'add_progress': { desc: 'Günlüğe ilerleme ekle', scopes: 'journal_entry' },
        },

        // ═══════════════════════════════════════════════════════════════
        // MODIFIERS (Değiştiriciler)
        // ═══════════════════════════════════════════════════════════════
        modifiers: {
            // Country - Prestige & Infamy
            'country_prestige_add': { desc: 'Sabit prestij bonusu', scopes: 'country' },
            'country_prestige_mult': { desc: 'Prestij çarpanı', scopes: 'country' },
            'country_infamy_add': { desc: 'Sabit şöhret değişimi', scopes: 'country' },
            'country_infamy_mult': { desc: 'Şöhret çarpanı', scopes: 'country' },

            // Country - Authority & Bureaucracy
            'country_authority_add': { desc: 'Sabit otorite bonusu', scopes: 'country' },
            'country_authority_mult': { desc: 'Otorite çarpanı', scopes: 'country' },
            'country_bureaucracy_add': { desc: 'Sabit bürokrasi bonusu', scopes: 'country' },
            'country_bureaucracy_mult': { desc: 'Bürokrasi çarpanı', scopes: 'country' },

            // Country - Influence
            'country_influence_add': { desc: 'Sabit etki bonusu', scopes: 'country' },
            'country_influence_mult': { desc: 'Etki çarpanı', scopes: 'country' },

            // Country - Tax & Economy
            'country_tax_income_add': { desc: 'Sabit vergi geliri', scopes: 'country' },
            'country_tax_income_mult': { desc: 'Vergi geliri çarpanı', scopes: 'country' },
            'country_government_wages_mult': { desc: 'Hükümet maaş maliyeti', scopes: 'country' },
            'country_military_wages_mult': { desc: 'Askeri maaş maliyeti', scopes: 'country' },

            // Country - Construction
            'country_construction_add': { desc: 'İnşaat hızı bonusu', scopes: 'country' },
            'country_max_weekly_construction_progress_add': { desc: 'Haftalık maks inşaat', scopes: 'country' },

            // Country - Law
            'country_law_enactment_time_mult': { desc: 'Yasa çıkarma süresi', scopes: 'country' },
            'country_law_enactment_success_add': { desc: 'Çıkarma başarı şansı', scopes: 'country' },

            // Country - Trade & Convoys
            'country_convoys_capacity_mult': { desc: 'Konvoy kapasitesi çarpanı', scopes: 'country' },
            'country_convoys_capacity_add': { desc: 'Sabit konvoy kapasitesi', scopes: 'country' },
            'country_trade_route_cost_mult': { desc: 'Ticaret rotası maliyeti', scopes: 'country' },

            // Country - Companies
            'country_max_companies_add': { desc: 'Maks şirket limiti', scopes: 'country' },

            // Country - Military Power
            'country_army_power_projection_mult': { desc: 'Ordu projeksiyon çarpanı', scopes: 'country' },
            'country_navy_power_projection_mult': { desc: 'Donanma projeksiyon çarpanı', scopes: 'country' },

            // Country - Technology
            'country_tech_research_speed_mult': { desc: 'Araştırma hızı çarpanı', scopes: 'country' },
            'country_tech_spread_mult': { desc: 'Teknoloji yayılma çarpanı', scopes: 'country' },

            // Country - Diplomacy
            'country_tension_decay_mult': { desc: 'Gerilim azalma oranı', scopes: 'country' },

            // Country - Migration
            'country_migration_pull_mult': { desc: 'Göç çekimi çarpanı', scopes: 'country' },

            // Unit Modifiers
            'unit_offense_add': { desc: 'Birim saldırı bonusu', scopes: 'country, character' },
            'unit_offense_mult': { desc: 'Birim saldırı çarpanı', scopes: 'country, character' },
            'unit_defense_add': { desc: 'Birim savunma bonusu', scopes: 'country, character' },
            'unit_defense_mult': { desc: 'Birim savunma çarpanı', scopes: 'country, character' },
            'unit_morale_loss_mult': { desc: 'Moral kaybı çarpanı', scopes: 'country, character' },
            'unit_morale_recovery_mult': { desc: 'Moral toparlanma çarpanı', scopes: 'country, character' },

            // Building Modifiers
            'building_throughput_add': { desc: 'Sabit bina verimliliği', scopes: 'building, state' },
            'building_throughput_mult': { desc: 'Bina verimlilik çarpanı', scopes: 'building, state' },
            'building_input_mult': { desc: 'Girdi maliyeti çarpanı', scopes: 'building, state' },
            'building_output_mult': { desc: 'Çıktı çarpanı', scopes: 'building, state' },

            // State Modifiers
            'state_infrastructure_add': { desc: 'Sabit altyapı bonusu', scopes: 'state' },
            'state_infrastructure_mult': { desc: 'Altyapı çarpanı', scopes: 'state' },
            'state_tax_capacity_add': { desc: 'Vergi kapasitesi bonusu', scopes: 'state' },
            'state_tax_capacity_mult': { desc: 'Vergi kapasitesi çarpanı', scopes: 'state' },
            'state_birth_rate_mult': { desc: 'Doğum oranı çarpanı', scopes: 'state' },
            'state_mortality_mult': { desc: 'Ölüm oranı çarpanı', scopes: 'state' },
            'state_migration_pull_mult': { desc: 'Göç çekimi çarpanı', scopes: 'state' },
            'state_assimilation_mult': { desc: 'Asimilasyon oranı', scopes: 'state' },
            'state_conversion_mult': { desc: 'Dini dönüşüm oranı', scopes: 'state' },

            // Interest Group
            'interest_group_approval_add': { desc: 'IG onay bonusu', scopes: 'interest_group' },
            'interest_group_pol_str_mult': { desc: 'IG siyasi güç çarpanı', scopes: 'interest_group' },
        },

        // ═══════════════════════════════════════════════════════════════
        // SCOPES (Kapsam Referansları)
        // ═══════════════════════════════════════════════════════════════
        scopes: {
            // Core Scopes
            'root': { desc: 'Event/efektin başladığı ilk kapsam | Değişmez referans noktası', scopes: 'any' },
            'prev': { desc: 'Zincirde bir önceki kapsam | every_country = { prev = ülke }', scopes: 'any' },
            'this': { desc: 'Şu anki kapsam | Genelde açıkça yazılmaz', scopes: 'any' },
            'from': { desc: 'Event tetikleyicisi | Event\'i başlatan scope', scopes: 'any' },
            'yes': { desc: 'Boolean true değeri | visible = yes', scopes: 'any' },
            'no': { desc: 'Boolean false değeri | fire_only_once = no', scopes: 'any' },

            // Country Scopes
            'owner': { desc: 'Eyalet/bina/pop sahibi ülke | s:STATE.owner = ülke', scopes: 'state, building, pop' },
            'controller': { desc: 'Eyaleti/cepheyi kontrol eden ülke | Savaşta farklı olabilir', scopes: 'state, front' },
            'country': { desc: 'Genel ülke referansı | Scope\'u ülkeye çevirir', scopes: 'any' },
            'overlord': { desc: 'Vasalın sahibi ülke | subject.overlord = efendi', scopes: 'country' },
            'top_overlord': { desc: 'Vasal zincirinin en tepesi | İç içe vasallarda üst efendi', scopes: 'country' },
            'target_country': { desc: 'Diplomatik oyunda hedef ülke | Pasif taraf', scopes: 'diplomatic_play' },
            'initiator': { desc: 'Diplomatik oyunu başlatan | Aktif taraf', scopes: 'diplomatic_play' },
            'target': { desc: 'Hedef scope | Context\'e göre değişir', scopes: 'diplomatic_play' },
            'first_country': { desc: 'İlişki/pakt\'taki 1. ülke | İkili anlaşmalarda', scopes: 'any' },
            'second_country': { desc: 'İlişki/pakt\'taki 2. ülke | İkili anlaşmalarda', scopes: 'any' },
            'source_country': { desc: 'Kaynak/menşe ülke | Migration/trade\'de', scopes: 'any' },
            'home_country': { desc: 'Kültürün ana ülkesi | Homeland kabul edilen ülke', scopes: 'culture' },
            'power_bloc_leader': { desc: 'Güç bloğunun lider ülkesi | Bloğu kuran', scopes: 'power_bloc' },

            // Country Shorthands
            'c': { desc: 'Ülke TAG kısayolu | c:GBR = Britanya, c:FRA = Fransa', scopes: 'any' },

            // State Scopes
            'state': { desc: 'Eyalet scope | Bölgedeki tek eyalet', scopes: 'any' },
            'capital': { desc: 'Ülkenin başkent eyaleti | Ana şehir', scopes: 'country' },
            'market_capital': { desc: 'Pazarın merkez eyaleti | Ekonomik merkez', scopes: 'country, market' },
            'state_region': { desc: 'Eyaletin bölge tanımı | Haritadaki alan', scopes: 'state' },
            'region': { desc: 'Bölge referansı | Geographic region', scopes: 'state' },

            // State Shorthands
            's': { desc: 'Eyalet bölgesi kısayolu | s:STATE_LONDON, s:STATE_PARIS', scopes: 'any' },

            // Character Scopes
            'character': { desc: 'Karakter scope | Lider/komutan/agitator', scopes: 'any' },
            'ruler': { desc: 'Ülkenin mevcut lideri | Hükümdar/başkan', scopes: 'country' },
            'heir': { desc: 'Ülkenin varisi | Bir sonraki lider', scopes: 'country' },
            'commander': { desc: 'Birliğin komutanı | General/amiral', scopes: 'military_formation' },
            'leader': { desc: 'IG\'nin lider karakteri | İlgi grubu başkanı', scopes: 'interest_group' },

            // Pop Scopes
            'pop': { desc: 'Nüfus grubu scope | Eyaletteki pop', scopes: 'state' },
            'pop_type': { desc: 'Pop\'un meslek tipi | Aristocrats, clerks vb.', scopes: 'pop' },

            // Building & Market
            'building': { desc: 'Bina scope | Eyaletteki yapı', scopes: 'state' },
            'market': { desc: 'Pazar scope | Ticaret alanı', scopes: 'country, state' },

            // Interest Group
            'interest_group': { desc: 'İlgi grubu scope | Siyasi grup', scopes: 'country, character' },
            'ig': { desc: 'IG kısayolu | ig:ig_landowners, ig:ig_industrialists', scopes: 'any' },

            // Culture & Religion
            'culture': { desc: 'Kültür scope | Etnik grup', scopes: 'pop, character' },
            'religion': { desc: 'Din scope | İnanç grubu', scopes: 'pop, character' },
            'cu': { desc: 'Kültür kısayolu | cu:british, cu:french, cu:german', scopes: 'any' },
            'rel': { desc: 'Din kısayolu | rel:protestant, rel:catholic, rel:sunni', scopes: 'any' },

            // War & Diplomacy
            'war': { desc: 'Savaş scope | Aktif çatışma', scopes: 'country' },
            'diplomatic_play': { desc: 'Diplomatik oyun scope | Kriz/ultimatum', scopes: 'country' },

            // Military
            'military_formation': { desc: 'Askeri birlik scope | Ordu/donanma', scopes: 'country' },
            'combat_unit': { desc: 'Savaş birimi scope | Regiment/gemi', scopes: 'military_formation' },
            'front': { desc: 'Cephe scope | Savaş hattı', scopes: 'war' },

            // Journal & Law
            'journal_entry': { desc: 'Günlük girişi scope | Görev/olay takibi', scopes: 'country' },
            'law': { desc: 'Yasa scope | Aktif kanun', scopes: 'country' },
            'law_type': { desc: 'Yasa tipi referansı | law_type:law_monarchy, law_type:law_census_voting', scopes: 'any' },

            // Technology
            'technology': { desc: 'Teknoloji scope | Araştırma', scopes: 'country' },

            // Goods & Companies
            'goods': { desc: 'Mal tipi scope | Ticaret malı | goods:grain, goods:tools', scopes: 'any' },
            'company': { desc: 'Şirket scope | Holding şirketi', scopes: 'country' },

            // Power Bloc
            'power_bloc': { desc: 'Güç bloğu scope | Uluslararası ittifak bloğu', scopes: 'country' },

            // Political
            'political_movement': { desc: 'Siyasi hareket scope | Reformist/devrimci hareket', scopes: 'country' },
            'political_lobby': { desc: 'Siyasi lobi scope | Baskı grubu', scopes: 'country' },

            // Institution
            'institution': { desc: 'Kurum scope | Devlet kurumu | Eğitim/sağlık sistemi', scopes: 'country' },

            // Treaty
            'treaty': { desc: 'Antlaşma scope | İkili/çoklu anlaşma', scopes: 'country' },
            'article': { desc: 'Antlaşma maddesi scope | Anlaşmanın bir şartı', scopes: 'treaty' },
            'amendment': { desc: 'Antlaşma değişikliği scope | Madde revizyonu', scopes: 'treaty' },

            // Variable References
            'var': { desc: 'Değişken referansı | Kaydedilmiş değer | var:my_counter', scopes: 'any' },
            'local_var': { desc: 'Lokal değişken | Scope içi geçici değişken', scopes: 'any' },
            'global_var': { desc: 'Global değişken | Oyun geneli kalıcı değişken', scopes: 'any' },
            'scope': { desc: 'Kaydedilmiş scope referansı | scope:saved_country', scopes: 'any' },

            // Region References
            'sr': { desc: 'Eyalet bölgesi referansı | sr:region_england, sr:region_anatolia', scopes: 'any' },

            // Special
            'subject': { desc: 'Vasal ülke scope | Tabi/bağımlı ülke', scopes: 'country' },
            'production_method': { desc: 'Üretim metodu scope | Bina PM\'si', scopes: 'building' },
        },

        // ═══════════════════════════════════════════════════════════════
        // STRUCTURE (Yapı)
        // ═══════════════════════════════════════════════════════════════
        structure: {
            // Event Structure
            'namespace': { desc: 'Event namespace | namespace = my_events', scopes: 'event' },
            'type': { desc: 'Event/varlık tipi | type = country_event', scopes: 'event, building' },
            'placement': { desc: 'Event yerleşim ülkesi', scopes: 'event' },
            'title': { desc: 'Başlık anahtarı | title = "EVENT_TITLE"', scopes: 'event, je' },
            'desc': { desc: 'Açıklama anahtarı | desc = "EVENT_DESC"', scopes: 'event, je, decision' },
            'flavor': { desc: 'Lezzet metni', scopes: 'event' },
            'option': { desc: 'Event seçeneği | option = { name = "OPTION_1" }', scopes: 'event' },
            'name': { desc: 'Ad tanımlayıcı | name = "my_name"', scopes: 'any' },
            'trigger': { desc: 'Tetikleyici blok | trigger = { }', scopes: 'event, decision, je' },
            'immediate': { desc: 'Anında efektler | immediate = { }', scopes: 'event' },
            'on_created': { desc: 'Oluşturulduğunda', scopes: 'je' },
            'on_timeout': { desc: 'Zaman aşımında', scopes: 'event, je' },
            'event_image': { desc: 'Event resmi | event_image = { video = "gfx/..." }', scopes: 'event' },
            'video': { desc: 'Video dosyası', scopes: 'event_image' },
            'icon': { desc: 'İkon yolu', scopes: 'event, je, modifier' },
            'cooldown': { desc: 'Bekleme süresi | cooldown = { months = 6 }', scopes: 'event' },
            'fire_only_once': { desc: 'Sadece bir kez | fire_only_once = yes', scopes: 'event' },
            'hidden': { desc: 'Gizli | hidden = yes', scopes: 'event, effect' },
            'default_option': { desc: 'Varsayılan seçenek', scopes: 'option' },

            // Decision Structure
            'is_shown': { desc: 'Görünürlük koşulları | is_shown = { }', scopes: 'decision' },
            'possible': { desc: 'Olasılık koşulları | possible = { }', scopes: 'decision, je' },
            'when_taken': { desc: 'Alındığında efektler', scopes: 'decision' },

            // AI
            'ai_chance': { desc: 'AI ağırlığı | ai_chance = { base = 100 }', scopes: 'decision, event' },
            'weight': { desc: 'Ağırlık değeri', scopes: 'any' },

            // Journal Entry
            'group': { desc: 'Günlük grubu', scopes: 'je' },
            'complete': { desc: 'Tamamlama koşulları', scopes: 'je' },
            'on_complete': { desc: 'Tamamlama efektleri', scopes: 'je' },
            'fail': { desc: 'Başarısızlık koşulları', scopes: 'je' },
            'on_fail': { desc: 'Başarısızlık efektleri', scopes: 'je' },
            'invalid': { desc: 'Geçersizlik koşulları', scopes: 'je' },
            'timeout': { desc: 'Zaman aşımı süresi', scopes: 'je' },
            'progressbar': { desc: 'İlerleme çubuğu | progressbar = yes', scopes: 'je' },
            'current_value': { desc: 'Geçerli ilerleme', scopes: 'je' },
            'goal_add_value': { desc: 'Hedef değer', scopes: 'je' },
            'on_monthly_pulse': { desc: 'Aylık nabız efektleri', scopes: 'je' },

            // Building & PM
            'building_group': { desc: 'Bina grubu tipi', scopes: 'building' },
            'texture': { desc: 'Doku yolu', scopes: 'building, pm' },
            'unlocking_technologies': { desc: 'Gerekli teknolojiler', scopes: 'building, pm' },
            'unlocking_laws': { desc: 'Gerekli yasalar', scopes: 'building, pm' },
            'building_modifiers': { desc: 'Bina modifier bloğu', scopes: 'pm' },
            'workforce_scaled': { desc: 'İşgücü ölçekli', scopes: 'pm' },
            'level_scaled': { desc: 'Seviye ölçekli', scopes: 'pm' },
            'unscaled': { desc: 'Ölçeksiz', scopes: 'pm' },

            // Law
            'law_group': { desc: 'Yasa grubu tipi', scopes: 'law' },
            'on_activate': { desc: 'Aktivasyon efektleri', scopes: 'law' },
            'on_deactivate': { desc: 'Deaktivasyon efektleri', scopes: 'law' },

            // Modifier Block
            'modifier': { desc: 'Modifier bloğu | modifier = { }', scopes: 'law, modifier' },
            'duration': { desc: 'Gün cinsinden süre', scopes: 'modifier, event' },
            'months': { desc: 'Ay cinsinden süre | months = 12', scopes: 'modifier' },
            'days': { desc: 'Gün cinsinden süre | days = 365', scopes: 'modifier' },
            'years': { desc: 'Yıl cinsinden süre | years = 5', scopes: 'modifier' },

            // Character
            'traits': { desc: 'Özellik listesi', scopes: 'character' },
            'ideology': { desc: 'Karakter ideolojisi', scopes: 'character, ig' },
            'birth_date': { desc: 'Doğum tarihi | birth_date = 1800.1.1', scopes: 'character' },
            'first_name': { desc: 'Karakter adı', scopes: 'character' },
            'last_name': { desc: 'Karakter soyadı', scopes: 'character' },
            'female': { desc: 'Kadın | female = yes', scopes: 'character' },
            'noble': { desc: 'Soylu | noble = yes', scopes: 'character' },
            'historical': { desc: 'Tarihsel karakter', scopes: 'character' },
            'hq_region': { desc: 'Karargah bölgesi', scopes: 'character' },
            'commander_rank': { desc: 'Komutan rütbesi', scopes: 'character' },

            // Script Values
            'base': { desc: 'Temel değer | base = 100', scopes: 'ai_chance, script_value' },
            'add': { desc: 'Ekle | add = 10', scopes: 'ai_chance, script_value' },
            'multiply': { desc: 'Çarp | multiply = 2', scopes: 'ai_chance, script_value' },
            'subtract': { desc: 'Çıkar | subtract = 5', scopes: 'ai_chance, script_value' },
            'divide': { desc: 'Böl | divide = 2', scopes: 'ai_chance, script_value' },
            'min': { desc: 'Minimum değer', scopes: 'script_value' },
            'max': { desc: 'Maksimum değer', scopes: 'script_value' },
            'factor': { desc: 'Faktör/çarpan', scopes: 'ai_chance' },
            'value': { desc: 'Değer ifadesi', scopes: 'any' },

            // Conditions
            'limit': { desc: 'Sınırlayıcı koşullar | limit = { }', scopes: 'effect, trigger' },
            'count': { desc: 'Sayı değeri', scopes: 'any' },
            'percent': { desc: 'Yüzde değeri', scopes: 'any' },
            'filter': { desc: 'Filtre koşulları', scopes: 'iteration' },
            'who': { desc: 'Kim hedefi', scopes: 'diplomatic' },
            'text': { desc: 'Metin dizesi', scopes: 'any' },

            // Event ID
            'id': { desc: 'Event/varlık ID | id = event.1', scopes: 'event, trigger_event' },

            // Country Creation
            'tag': { desc: 'Ülke etiketi', scopes: 'create_country' },
            'province': { desc: 'Vilayet referansı', scopes: 'state' },
            'provinces': { desc: 'Vilayetler listesi', scopes: 'state' },
            'origin': { desc: 'Kaynak ülke', scopes: 'mass_migration, create_country' },

            // Building Creation
            'building_type': { desc: 'Bina tipi', scopes: 'building' },
            'level': { desc: 'Bina seviyesi | level = 5', scopes: 'building' },
            'reserves': { desc: 'Bina rezervleri', scopes: 'building' },

            // Military
            'escalation': { desc: 'Tırmanma seviyesi', scopes: 'diplomatic_play' },

            // Misc Structure
            'setting': { desc: 'Ayar bloğu', scopes: 'any' },
            'template': { desc: 'Şablon referansı', scopes: 'character' },
            'inputs': { desc: 'Girdi malları', scopes: 'building' },
            'amount': { desc: 'Miktar değeri', scopes: 'any' },
            'multiplier': { desc: 'Çarpan değeri', scopes: 'any' },
            'strata': { desc: 'Nüfus tabakası', scopes: 'pop' },
            'mode': { desc: 'Mod ayarı', scopes: 'any' },
            'object': { desc: 'Nesne referansı', scopes: 'any' },
            'sponsor': { desc: 'Sponsor referansı', scopes: 'any' },
        },

        // ═══════════════════════════════════════════════════════════════
        // GUI (Arayüz Elemanları)
        // ═══════════════════════════════════════════════════════════════
        gui: {
            // ─── Widget Types ───
            'widget': { desc: 'Temel konteyner | widget = { size = { 100 100 } }' },
            'container': { desc: 'Genel konteyner | container = { name = "x" }' },
            'flowcontainer': { desc: 'Otomatik akış | flowcontainer = { direction = vertical }' },
            'fixedgridbox': { desc: 'Sabit grid | fixedgridbox = { addcolumn = 100 addrow = 50 }' },
            'dynamicgridbox': { desc: 'Dinamik grid | dynamicgridbox = { datamodel = "[Get]" }' },
            'scrollarea': { desc: 'Kaydırılabilir alan | scrollarea = { }' },
            'scrollwidget': { desc: 'Scrollarea içeriği | scrollwidget = { }' },
            'button': { desc: 'Tıklanabilir buton | button = { onclick = "[Execute]" }' },
            'button_group': { desc: 'Buton grubu | button_group = { name = "tabs" }' },
            'textbox': { desc: 'Metin kutusu | textbox = { text = "KEY" }' },
            'text': { desc: 'Basit metin | text = { raw_text = "Hello" }' },
            'editbox': { desc: 'Metin girişi | editbox = { maxcharacters = 50 }' },
            'editor_textbox': { desc: 'Editör metin | editor_textbox = { }' },
            'dropdown': { desc: 'Açılır menü | dropdown = { datamodel = "[Get]" }' },
            'icon': { desc: 'İkon/resim | icon = { texture = "gfx/x.dds" }' },
            'progressbar': { desc: 'İlerleme çubuğu | progressbar = { value = 0.5 }' },
            'scrollbar': { desc: 'Kaydırma çubuğu | scrollbar = { direction = vertical }' },
            'checkbutton': { desc: 'Onay kutusu | checkbutton = { checked = "[Is]" }' },
            'piechart': { desc: 'Pasta grafik | piechart = { datamodel = "[Get]" }' },
            'minimap': { desc: 'Mini harita | minimap = { }' },
            'window': { desc: 'Pencere | window = { movable = yes }' },
            'hbox': { desc: 'Yatay düzen | hbox = { spacing = 10 }' },
            'vbox': { desc: 'Dikey düzen | vbox = { margin = { 10 10 } }' },
            'line': { desc: 'Çizgi | line = { }' },
            'portrait': { desc: 'Karakter portresi' },
            'coat_of_arms': { desc: 'Arma gösterimi' },
            'overlappingitembox': { desc: 'Örtüşen öğeler | overlappingitembox = { }' },
            'margin_widget': { desc: 'Kenar boşluklu widget | margin_widget = { margin = { 5 5 } }' },
            'tree': { desc: 'Ağaç görünümü | tree = { }' },
            'treenode': { desc: 'Ağaç düğümü' },
            'cameracontrolwidget': { desc: 'Kamera kontrolü' },
            'treemapchart': { desc: 'Treemap grafik' },
            'treemapslice': { desc: 'Treemap dilimi' },
            'pieslice': { desc: 'Pasta dilimi' },
            'plotline': { desc: 'Çizgi grafik' },
            'chart': { desc: 'Grafik widget' },
            'zoomwidget': { desc: 'Yakınlaştırılabilir | zoomwidget = { zoom = 1.0 }' },
            'video': { desc: 'Video oynatıcı' },
            'vfx': { desc: 'Görsel efektler' },
            'entity_instance': { desc: 'Varlık örneği' },
            'colorpicker_simple': { desc: 'Renk seçici' },

            // ─── Layout Properties ───
            'size': { desc: 'Boyut | size = { 200 100 } veya size = { 100% 50 }' },
            'position': { desc: 'Konum | position = { 10 20 }' },
            'position_x': { desc: 'X konumu | position_x = 100' },
            'position_y': { desc: 'Y konumu | position_y = 50' },
            'parentanchor': { desc: 'Ebeveyn çapa | parentanchor = top|left' },
            'widgetanchor': { desc: 'Widget çapa | widgetanchor = center' },
            'layoutanchor': { desc: 'Düzen çapa' },
            'margin': { desc: 'Kenar boşlukları | margin = { 10 10 }' },
            'margin_top': { desc: 'Üst kenar | margin_top = 10' },
            'margin_bottom': { desc: 'Alt kenar | margin_bottom = 10' },
            'margin_left': { desc: 'Sol kenar | margin_left = 15' },
            'margin_right': { desc: 'Sağ kenar | margin_right = 15' },
            'spacing': { desc: 'Çocuk aralığı | spacing = 5' },
            'minimumsize': { desc: 'Min boyut | minimumsize = { 100 50 }' },
            'maximumsize': { desc: 'Maks boyut | maximumsize = { 400 -1 }' },
            'min_width': { desc: 'Min genişlik | min_width = 100' },
            'max_width': { desc: 'Maks genişlik | max_width = 500' },
            'min_height': { desc: 'Min yükseklik' },
            'max_height': { desc: 'Maks yükseklik' },
            'width': { desc: 'Genişlik | width = 200' },
            'resizeparent': { desc: 'Ebeveyni yeniden boyutla | resizeparent = yes' },
            'restrictparent_min': { desc: 'Ebeveyn min sınırla' },
            'autoresize': { desc: 'Otomatik boyut | autoresize = yes' },
            'autoresizescrollarea': { desc: 'Scroll alanı otomatik boyut' },
            'scissor': { desc: 'Taşmayı kes | scissor = yes' },
            'direction': { desc: 'Akış yönü | direction = vertical' },
            'layoutpolicy_horizontal': { desc: 'Yatay politika | layoutpolicy_horizontal = expanding' },
            'layoutpolicy_vertical': { desc: 'Dikey politika | layoutpolicy_vertical = preferred' },
            'layoutstretchfactor_horizontal': { desc: 'Yatay esneme faktörü' },
            'addcolumn': { desc: 'Grid sütun genişliği | addcolumn = 253' },
            'addrow': { desc: 'Grid satır yüksekliği | addrow = 120' },
            'datamodel_wrap': { desc: 'Satır/sütun başına öğe | datamodel_wrap = 2' },
            'flipdirection': { desc: 'Düzen sırasını çevir' },
            'ignoreinvisible': { desc: 'Görünmezleri atla' },
            'distribute_visual_state': { desc: 'Görsel durumu dağıt' },
            'resizable': { desc: 'Yeniden boyutlanabilir | resizable = yes' },
            'movable': { desc: 'Sürüklenebilir | movable = yes' },
            'maxhorizontalslots': { desc: 'Maks yatay slot' },
            'maxverticalslots': { desc: 'Maks dikey slot' },
            'setitemsizefromcell': { desc: 'Öğe boyutu hücreden' },
            'set_parent_size_to_minimum': { desc: 'Ebeveyn min boyuta' },
            'preferscrollwidgetsize': { desc: 'Scroll widget boyutu tercih' },
            'expand': { desc: 'Genişlet | expand = { }' },
            'offset': { desc: 'Konum ofseti | offset = { 10 10 }' },
            'axis': { desc: 'Düzen ekseni | axis = horizontal' },
            'wrap_count': { desc: 'Sarma sayısı' },
            'allow_outside': { desc: 'Dışarıya izin ver' },
            'draggable_by': { desc: 'Sürükleme tutacağı' },
            'reorder_on_mouse': { desc: 'Mouse ile yeniden sırala' },
            'fittype': { desc: 'Sığdırma tipi | fittype = center' },
            'iconsize': { desc: 'İkon boyutu | iconsize = { 32 32 }' },

            // ─── Visual & Graphics ───
            'visible': { desc: 'Görünürlük | visible = "[ShouldShow]"' },
            'visible_at_creation': { desc: 'Başlangıç görünürlüğü | visible_at_creation = no' },
            'alpha': { desc: 'Saydamlık 0-1 | alpha = 0.5' },
            'scale': { desc: 'Ölçek faktörü | scale = 1.5' },
            'color': { desc: 'RGBA renk | color = { 1.0 0.5 0.5 1.0 }' },
            'tintcolor': { desc: 'Renk tonu | tintcolor = { 0.8 0.8 0.8 1.0 }' },
            'texture': { desc: 'Resim yolu | texture = "gfx/interface/x.dds"' },
            'shaderfile': { desc: 'Shader yolu' },
            'gfxtype': { desc: 'Grafik tipi | gfxtype = framedbuttongfx' },
            'effectname': { desc: 'Shader efekti | effectname = "NoHighlight"' },
            'spritetype': { desc: 'Sprite tipi | spritetype = CorneredStretched' },
            'spriteborder': { desc: 'Kenar boyutları | spriteborder = { 6 6 }' },
            'spriteborder_top': { desc: 'Üst kenar' },
            'spriteborder_bottom': { desc: 'Alt kenar' },
            'spriteborder_left': { desc: 'Sol kenar' },
            'spriteborder_right': { desc: 'Sağ kenar' },
            'frame': { desc: 'Geçerli kare | frame = 1' },
            'framesize': { desc: 'Kare boyutu | framesize = { 16 16 }' },
            'upframe': { desc: 'Normal durum karesi' },
            'downframe': { desc: 'Basılı durum karesi' },
            'overframe': { desc: 'Hover durum karesi' },
            'uphoverframe': { desc: 'Yukarı hover karesi' },
            'uppressedframe': { desc: 'Yukarı basılı karesi' },
            'downhoverframe': { desc: 'Aşağı hover karesi' },
            'downpressedframe': { desc: 'Aşağı basılı karesi' },
            'disableframe': { desc: 'Devre dışı karesi' },
            'loopinterval': { desc: 'Animasyon döngü süresi' },
            'intersectionmask': { desc: 'Tıklama maskesi | intersectionmask = yes' },
            'mask': { desc: 'Görsel maske | mask = "gfx/mask.dds"' },
            'mirror': { desc: 'Ayna yönü | mirror = horizontal' },
            'blend_mode': { desc: 'Karışım modu | blend_mode = add' },
            'modify_texture': { desc: 'Doku değiştirici' },
            'layer': { desc: 'Render katmanı | layer = windows_layer' },
            'inherit_visual_state': { desc: 'Ebeveyn durumu devral' },
            'grayscale': { desc: 'Gri tonlama | grayscale = yes' },
            'background_texture': { desc: 'Arka plan dokusu' },
            'render_pass': { desc: 'Render geçişi' },
            'rotate_uv': { desc: 'UV döndürme' },
            'translate_uv': { desc: 'UV kaydırma' },
            'uv_scale': { desc: 'UV ölçekleme' },
            'mask_uv_scale': { desc: 'Maske UV ölçekleme' },
            'texture_density': { desc: 'Doku yoğunluğu' },
            'mipmaplodbias': { desc: 'Mipmap LOD sapması' },
            'color_blind_mode': { desc: 'Renk körlüğü modu' },
            'gfx_environment_file': { desc: 'GFX ortam dosyası' },

            // ─── Background & Highlight ───
            'background': { desc: 'Arka plan | background = { texture = "gfx/bg.dds" }' },
            'highlight': { desc: 'Hover vurgusu | highlight = { }' },
            'progresstexture': { desc: 'İlerleme dokusu' },
            'noprogresstexture': { desc: 'Boş ilerleme dokusu' },
            'marker': { desc: 'İşaretçi elemanı' },

            // ─── Text Properties ───
            'raw_text': { desc: 'Ham metin | raw_text = "#BOLD;Title#!"' },
            'tooltip': { desc: 'Hover tooltip | tooltip = "TOOLTIP_KEY"' },
            'raw_tooltip': { desc: 'Ham tooltip | raw_tooltip = "Text"' },
            'tooltipwidget': { desc: 'Özel tooltip widget | tooltipwidget = { }' },
            'font': { desc: 'Font ailesi | font = StandardGameFont' },
            'fontsize': { desc: 'Font boyutu | fontsize = 14' },
            'fontsize_min': { desc: 'Min font boyutu' },
            'fontcolor': { desc: 'Font rengi | fontcolor = { 0.86 0.86 0.73 1 }' },
            'fonttintcolor': { desc: 'Font renk tonu' },
            'align': { desc: 'Metin hizalama | align = left|nobaseline' },
            'elide': { desc: 'Metin kısaltma | elide = right' },
            'multiline': { desc: 'Çok satırlı | multiline = yes' },
            'single_line': { desc: 'Tek satır zorla' },
            'maxcharacters': { desc: 'Maks karakter | maxcharacters = 100' },
            'default_format': { desc: 'Varsayılan format | default_format = "#medium"' },
            'default_text': { desc: 'Placeholder | default_text = "Enter..."' },
            'textformatting': { desc: 'Metin formatı | textformatting = yes' },
            'format': { desc: 'Format | format = "#bold"' },
            'format_override': { desc: 'Format geçersiz kılma' },
            'cursorcolor': { desc: 'İmleç rengi' },
            'password': { desc: 'Şifre alanı | password = yes' },
            'text_selectable': { desc: 'Seçilebilir metin' },
            'righttoleft': { desc: 'Sağdan sola' },
            'text_validator': { desc: 'Metin doğrulayıcı' },

            // ─── Data Binding ───
            'datacontext': { desc: 'Veri bağlamı | datacontext = "[GetCharacter]"' },
            'datacontext_from_model': { desc: 'Modelden bağlam' },
            'datamodel': { desc: 'Liste modeli | datamodel = "[GetItems]"' },
            'datamodel_reuse_widgets': { desc: 'Widget\'ları yeniden kullan' },
            'item': { desc: 'Liste öğesi şablonu | item = { }' },
            'active_item': { desc: 'Dropdown seçili öğe' },
            'list': { desc: 'Dropdown listesi' },
            'index': { desc: 'Öğe indeksi | index = "[GetIndex]"' },
            'enabled': { desc: 'Etkin durumu | enabled = "[IsAvailable]"' },
            'checked': { desc: 'İşaretli durumu | checked = "[IsChecked]"' },
            'selectedindex': { desc: 'Seçili indeks' },
            'force_data_properties_update': { desc: 'Veri güncelleme zorla' },

            // ─── Events & Actions ───
            'onclick': { desc: 'Tıklama | onclick = "[Execute]"' },
            'ondoubleclick': { desc: 'Çift tıklama' },
            'onrightclick': { desc: 'Sağ tıklama | onrightclick = "[ShowMenu]"' },
            'onmousehierarchyenter': { desc: 'Mouse girişi' },
            'onmousehierarchyleave': { desc: 'Mouse çıkışı' },
            'onvaluechanged': { desc: 'Değer değişti' },
            'ontextchanged': { desc: 'Metin değişti' },
            'ontextedited': { desc: 'Metin düzenlendi' },
            'oneditingfinished': { desc: 'Düzenleme bitti' },
            'onreturnpressed': { desc: 'Enter basıldı' },
            'onselectionchanged': { desc: 'Seçim değişti' },
            'onchangefinish': { desc: 'Değişiklik bitti' },
            'oncoloredited': { desc: 'Renk düzenlendi' },
            'ondefault': { desc: 'Varsayılan eylem' },
            'onalt': { desc: 'Alt eylemi' },
            'onshift': { desc: 'Shift eylemi' },
            'onctrl': { desc: 'Ctrl eylemi' },
            'clicksound': { desc: 'Tıklama sesi | clicksound = "event:/SFX/click"' },
            'rightclicksound': { desc: 'Sağ tıklama sesi' },
            'oversound': { desc: 'Hover sesi' },
            'button_trigger': { desc: 'Tetik tipi | button_trigger = none' },
            'input_action': { desc: 'Giriş bağlama | input_action = "scroll_down"' },
            'click_modifiers': { desc: 'Tıklama değiştiricileri' },
            'rightclick_modifiers': { desc: 'Sağ tık değiştiricileri' },
            'shortcut': { desc: 'Klavye kısayolu | shortcut = "close_window"' },
            'close_on_click_outside': { desc: 'Dışarı tıkla kapat' },

            // ─── Scrollbar ───
            'scrollbar_vertical': { desc: 'Dikey scrollbar' },
            'scrollbar_horizontal': { desc: 'Yatay scrollbar' },
            'scrollbarpolicy_horizontal': { desc: 'Yatay politika | always_off/as_needed' },
            'scrollbarpolicy_vertical': { desc: 'Dikey politika | always_on/as_needed' },
            'scrollbaralign_horizontal': { desc: 'Yatay hizalama' },
            'scrollbaralign_vertical': { desc: 'Dikey hizalama' },
            'scrollbox': { desc: 'Scrollbox' },
            'track': { desc: 'Scrollbar izi' },
            'slider': { desc: 'Scrollbar kaydırıcı' },
            'dec_button': { desc: 'Azaltma butonu' },
            'inc_button': { desc: 'Artırma butonu' },
            'wheelstep': { desc: 'Scroll adımı | wheelstep = 60' },
            'step': { desc: 'Adım boyutu' },

            // ─── Progressbar ───
            'invertprogress': { desc: 'İlerlemeyi tersle' },
            'progressbar_highlight': { desc: 'İlerleme vurgusu' },
            'progressbar_properties': { desc: 'İlerleme özellikleri' },
            'animate_negative_changes': { desc: 'Negatif animasyon' },

            // ─── Charts ───
            'startangle': { desc: 'Başlangıç açısı | startangle = 0' },
            'endangle': { desc: 'Bitiş açısı | endangle = 360' },
            'plotpoints': { desc: 'Çizim noktaları' },
            'points': { desc: 'Nokta verisi' },
            'axis_label': { desc: 'Eksen etiketi' },
            'compact_chart': { desc: 'Kompakt grafik' },
            'progresspie': { desc: 'İlerleme pasta | progresspie = { value = 0.5 }' },
            'animated_progresspie': { desc: 'Animasyonlu pasta' },

            // ─── Line Drawing ───
            'line_type': { desc: 'Çizgi tipi | line_type = solid' },
            'line_cap': { desc: 'Çizgi ucu | line_cap = round' },

            // ─── State & Animation ───
            'state': { desc: 'Görsel durum | state = { name = _mouse_enter }' },
            'animation': { desc: 'Animasyon | animation = { duration = 0.3 alpha = 1 }' },
            'next': { desc: 'Sonraki durum | next = "idle"' },
            'trigger_when': { desc: 'Otomatik tetik | trigger_when = "[Condition]"' },
            'trigger_on_create': { desc: 'Oluşturmada tetikle' },
            'on_start': { desc: 'Animasyon başında' },
            'on_finish': { desc: 'Animasyon sonunda' },
            'delay': { desc: 'Gecikme | delay = 0.2' },
            'curve': { desc: 'Easing eğrisi | curve = "ease_out"' },
            'bezier': { desc: 'Bezier eğrisi | bezier = { 0.5 0 1 1 }' },
            'start_sound': { desc: 'Animasyon sesi' },
            'loop': { desc: 'Döngü | loop = yes' },
            'skip_initial_animation': { desc: 'İlk animasyonu atla' },
            'progress_change_to_duration_curve': { desc: 'İlerleme süresi eğrisi' },
            'realtime': { desc: 'Gerçek zamanlı animasyon' },
            'max_update_rate': { desc: 'Maks güncelleme hızı' },

            // ─── Input & Focus ───
            'alwaystransparent': { desc: 'Tıklamaları geçir | alwaystransparent = yes' },
            'filter_mouse': { desc: 'Mouse filtreleme | filter_mouse = none' },
            'focuspolicy': { desc: 'Odak politikası | focuspolicy = click' },
            'focus_on_visible': { desc: 'Görünürde odaklan' },
            'modal': { desc: 'Modal pencere | modal = yes' },
            'modality': { desc: 'Modalite tipi | modality = all' },
            'ignore_unset_buttons': { desc: 'Ayarsız butonları yoksay' },
            'ignore_in_debug_draw': { desc: 'Debug çizimde yoksay' },

            // ─── Templates & Definitions ───
            'using': { desc: 'Şablon uygula | using = MyTemplate' },
            'block': { desc: 'Geçersiz kılınabilir blok | block "content" { }' },
            'blockoverride': { desc: 'Blok geçersiz kıl | blockoverride "content" { }' },
            'page': { desc: 'Sekme sayfası' },
            'widgetid': { desc: 'Widget ID | widgetid = "unique_id"' },

            // ─── Tooltip ───
            'tooltip_enabled': { desc: 'Tooltip etkin' },
            'tooltip_offset': { desc: 'Tooltip ofseti' },
            'tooltip_parentanchor': { desc: 'Tooltip ebeveyn çapa' },
            'tooltip_widgetanchor': { desc: 'Tooltip widget çapa' },
            'tooltip_type': { desc: 'Tooltip tipi' },
            'tooltip_horizontalbehavior': { desc: 'Yatay davranış | slide' },
            'tooltip_verticalbehavior': { desc: 'Dikey davranış | flip' },

            // ─── Sound ───
            'soundeffect': { desc: 'Ses efekti | soundeffect = "event:/SFX/x"' },
            'sstart_sound': { desc: 'Durum başlangıç sesi' },
            'open_sound': { desc: 'Açılış sesi' },
            'close_sound': { desc: 'Kapanış sesi' },
            'entity_enable_sound': { desc: 'Varlık sesi etkin' },

            // ─── Camera & 3D ───
            'camera_position': { desc: 'Kamera konumu' },
            'camera_look_at': { desc: 'Kamera hedefi' },
            'camera_fov_y_degrees': { desc: 'Kamera FOV' },
            'camera_near_far': { desc: 'Kamera yakın/uzak' },
            'zoom': { desc: 'Yakınlaştırma | zoom = 1.0' },
            'zoom_min': { desc: 'Min yakınlaştırma' },
            'zoom_max': { desc: 'Maks yakınlaştırma' },
            'zoom_step': { desc: 'Yakınlaştırma adımı' },
            'pan_position': { desc: 'Kaydırma konumu' },
            'portrait_offset': { desc: 'Portre ofseti' },
            'portrait_scale': { desc: 'Portre ölçeği' },
            'portrait_texture': { desc: 'Portre dokusu' },

            // ─── Layout Values ───
            'up': { desc: 'Yukarı yön' },
            'down': { desc: 'Aşağı yön' },
            'priority': { desc: 'Öncelik | priority = 100' },
            'relevant_dlc': { desc: 'İlgili DLC' },

            // ─── V3 Game Widgets - Panels ───
            'battle_panel': { desc: 'Savaş paneli' },
            'budget_panel': { desc: 'Bütçe paneli' },
            'building_browser_panel': { desc: 'Bina tarayıcı paneli' },
            'building_details_panel': { desc: 'Bina detay paneli' },
            'commander_panel': { desc: 'Komutan paneli' },
            'companies_panel': { desc: 'Şirketler paneli' },
            'company_panel': { desc: 'Şirket paneli' },
            'construction_panel': { desc: 'İnşaat paneli' },
            'countries_panel': { desc: 'Ülkeler paneli' },
            'country_panel': { desc: 'Ülke paneli' },
            'culture_info_panel': { desc: 'Kültür bilgi paneli' },
            'decisions_panel': { desc: 'Kararlar paneli' },
            'diplomatic_overview_panel': { desc: 'Diplomasi genel paneli' },
            'diplomatic_play_panel': { desc: 'Diplomatik oyun paneli' },
            'election_panel': { desc: 'Seçim paneli' },
            'front_panel': { desc: 'Cephe paneli' },
            'goods_panel': { desc: 'Mallar paneli' },
            'interest_group_panel': { desc: 'IG paneli' },
            'invasion_panel': { desc: 'İstila paneli' },
            'journal_panel': { desc: 'Günlük paneli' },
            'journal_entry_panel': { desc: 'Günlük girişi paneli' },
            'market_panel': { desc: 'Pazar paneli' },
            'military_formation_panel': { desc: 'Askeri birlik paneli' },
            'party_panel': { desc: 'Parti paneli' },
            'political_lobby_panel': { desc: 'Siyasi lobi paneli' },
            'political_movement_panel': { desc: 'Siyasi hareket paneli' },
            'politics_panel': { desc: 'Politika paneli' },
            'pop_browser_panel': { desc: 'Pop tarayıcı paneli' },
            'pop_details_panel': { desc: 'Pop detay paneli' },
            'pops_overview_panel': { desc: 'Pop genel paneli' },
            'power_bloc_panel': { desc: 'Güç bloğu paneli' },
            'power_bloc_formation_panel': { desc: 'Güç bloğu oluşturma paneli' },
            'religion_info_panel': { desc: 'Din bilgi paneli' },
            'sea_region_panel': { desc: 'Deniz bölgesi paneli' },
            'society_panel': { desc: 'Toplum paneli' },
            'states_panel': { desc: 'Eyaletler paneli' },
            'tech_tree_panel': { desc: 'Teknoloji ağacı paneli' },
            'treaty_panel': { desc: 'Antlaşma paneli' },
            'treaty_draft_panel': { desc: 'Antlaşma taslak paneli' },
            'war_panel': { desc: 'Savaş paneli' },
            'world_market_panel': { desc: 'Dünya pazarı paneli' },

            // ─── V3 Game Widgets - Items ───
            'battle_item': { desc: 'Savaş öğesi' },
            'building_item': { desc: 'Bina öğesi' },
            'character_item': { desc: 'Karakter öğesi' },
            'combat_unit_item': { desc: 'Savaş birimi öğesi' },
            'commander_item': { desc: 'Komutan öğesi' },
            'company_item': { desc: 'Şirket öğesi' },
            'country_outliner_item': { desc: 'Ülke outliner öğesi' },
            'decision': { desc: 'Karar widget' },
            'diplomatic_pact_item': { desc: 'Diplomatik pakt öğesi' },
            'diplomatic_play_item': { desc: 'Diplomatik oyun öğesi' },
            'event_item': { desc: 'Event öğesi' },
            'front_list_item': { desc: 'Cephe liste öğesi' },
            'goods_item': { desc: 'Mal öğesi' },
            'interest_group_item': { desc: 'IG öğesi' },
            'journal_entry': { desc: 'Günlük girişi' },
            'market_item': { desc: 'Pazar öğesi' },
            'player_item': { desc: 'Oyuncu öğesi' },
            'political_lobby_item': { desc: 'Lobi öğesi' },
            'pop_list': { desc: 'Pop listesi' },
            'power_bloc_list_item': { desc: 'Güç bloğu liste öğesi' },
            'power_bloc_member_item': { desc: 'Güç bloğu üye öğesi' },
            'state_item': { desc: 'Eyalet öğesi' },
            'subject_list_item': { desc: 'Vasal liste öğesi' },
            'technology': { desc: 'Teknoloji widget' },
            'treaty': { desc: 'Antlaşma widget' },
            'war_item': { desc: 'Savaş öğesi' },
            'wargoal_item': { desc: 'Savaş hedefi öğesi' },

            // ─── V3 Game Widgets - Portraits ───
            'character_portrait_large': { desc: 'Büyük karakter portresi' },
            'character_portrait_medium': { desc: 'Orta karakter portresi' },
            'character_portrait_small': { desc: 'Küçük karakter portresi' },
            'character_portrait_mini': { desc: 'Mini karakter portresi' },
            'pop_portrait_base': { desc: 'Temel pop portresi' },
            'pop_portrait_medium': { desc: 'Orta pop portresi' },
            'pop_portrait_small': { desc: 'Küçük pop portresi' },

            // ─── V3 Game Widgets - Flags ───
            'flag': { desc: 'Bayrak widget' },
            'flag_icon': { desc: 'Bayrak ikonu' },
            'large_flag': { desc: 'Büyük bayrak' },
            'small_flag': { desc: 'Küçük bayrak' },
            'tiny_flag': { desc: 'Minik bayrak' },
            'fancy_flag': { desc: 'Süslü bayrak' },
            'flag_3d': { desc: '3D bayrak' },
            'flag_3d_animated': { desc: 'Animasyonlu 3D bayrak' },
            'market_flag': { desc: 'Pazar bayrağı' },

            // ─── V3 Game Widgets - Icons ───
            'alert_icon': { desc: 'Uyarı ikonu' },
            'ig_icon': { desc: 'IG ikonu' },
            'institution_icon': { desc: 'Kurum ikonu' },
            'law_icon': { desc: 'Yasa ikonu' },
            'party_icon': { desc: 'Parti ikonu' },
            'power_bloc_icon': { desc: 'Güç bloğu ikonu' },
            'principle_icon': { desc: 'Prensip ikonu' },
            'rank_icon': { desc: 'Rütbe ikonu' },
            'rank_badge': { desc: 'Rütbe rozeti' },

            // ─── V3 Game Widgets - Charts ───
            'v3_piechart': { desc: 'V3 pasta grafik' },
            'v3_plotline': { desc: 'V3 çizgi grafik' },
            'v3_stacked_barchart': { desc: 'V3 yığılmış çubuk grafik' },
            'v3_treemapchart': { desc: 'V3 treemap grafik' },
            'culture_population_piechart': { desc: 'Kültür nüfus pasta' },
            'religion_population_piechart': { desc: 'Din nüfus pasta' },
            'state_culture_piechart': { desc: 'Eyalet kültür pasta' },
            'state_religion_piechart': { desc: 'Eyalet din pasta' },
            'pop_type_population_piechart': { desc: 'Pop tipi nüfus pasta' },

            // ─── V3 Game Widgets - Progressbars ───
            'default_progressbar_horizontal': { desc: 'Varsayılan yatay ilerleme' },
            'bad_progressbar_horizontal': { desc: 'Kötü yatay ilerleme' },
            'gold_progressbar_horizontal': { desc: 'Altın yatay ilerleme' },
            'green_progressbar_horizontal': { desc: 'Yeşil yatay ilerleme' },
            'white_progressbar_horizontal': { desc: 'Beyaz yatay ilerleme' },
            'morale_bar': { desc: 'Moral çubuğu' },
            'organization_bar': { desc: 'Organizasyon çubuğu' },
            'manpower_bar': { desc: 'İnsan gücü çubuğu' },

            // ─── V3 Game Widgets - Buttons ───
            'button_primary': { desc: 'Birincil buton' },
            'button_standard': { desc: 'Standart buton' },
            'button_tertiary': { desc: 'Üçüncül buton' },
            'button_icon_round': { desc: 'Yuvarlak ikon buton' },
            'button_icon_square': { desc: 'Kare ikon buton' },
            'button_tab': { desc: 'Sekme butonu' },
            'close_button': { desc: 'Kapatma butonu' },
            'back_button': { desc: 'Geri butonu' },
            'minimize_button': { desc: 'Küçültme butonu' },
            'sort_button': { desc: 'Sıralama butonu' },
            'filter_button': { desc: 'Filtre butonu' },

            // ─── V3 Game Widgets - Headers ───
            'default_header': { desc: 'Varsayılan başlık' },
            'default_header_clean': { desc: 'Temiz başlık' },
            'header_pattern': { desc: 'Başlık deseni' },
            'popup_top_header': { desc: 'Popup üst başlık' },

            // ─── V3 Game Widgets - Dividers ───
            'divider_decorative': { desc: 'Dekoratif bölücü' },
            'divider_clean': { desc: 'Temiz bölücü' },
            'divider_light': { desc: 'Açık bölücü' },
            'vertical_divider': { desc: 'Dikey bölücü' },
            'tooltip_divider': { desc: 'Tooltip bölücü' },

            // ─── V3 Game Widgets - Outliner ───
            'outliner': { desc: 'Outliner widget' },
            'outliner_entry': { desc: 'Outliner girişi' },
            'outliner_group': { desc: 'Outliner grubu' },
            'outliner_tab_button': { desc: 'Outliner sekme butonu' },
            'pinnable_outliner_group': { desc: 'Sabitlenebilir outliner grubu' },

            // ─── V3 Game Widgets - Popups & Windows ───
            'default_popup': { desc: 'Varsayılan popup' },
            'default_confirmation_window': { desc: 'Varsayılan onay penceresi' },
            'event_window': { desc: 'Event penceresi' },
            'fullscreen_block_window': { desc: 'Tam ekran engelleme penceresi' },
            'notification_popup': { desc: 'Bildirim popup' },

            // ─── V3 Game Widgets - Map ───
            'map_list_panel_item': { desc: 'Harita liste panel öğesi' },
            'lens_toolbar': { desc: 'Lens araç çubuğu' },
            'lens_option_button': { desc: 'Lens seçenek butonu' },

            // ─── V3 Game Widgets - Misc ───
            'topbar': { desc: 'Üst çubuk' },
            'timemanip': { desc: 'Zaman manipülasyonu' },
            'music_player': { desc: 'Müzik oynatıcı' },
            'spacer': { desc: 'Boşluk widget' },
            'empty_state': { desc: 'Boş durum widget' },
            'loading_tip': { desc: 'Yükleme ipucu' },
        }
    };
